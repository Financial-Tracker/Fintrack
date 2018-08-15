const { clientId, publicKey, secretKey } = require("../secret");
const path = require('path')
const bodyParser = require("body-parser");
const express = require("express");
const plaid = require("plaid");
const volleyball = require("volleyball");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let ACCESS_TOKEN = null;
let PUBLIC_TOKEN = null;

const client = new plaid.Client(
  clientId,
  secretKey,
  publicKey,
  plaid.environments.sandbox
);

app.use(volleyball);
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'public')))

app.post("/get_access_token", async function(request, response, next) {
  console.log(request.body);
  PUBLIC_TOKEN = await request.body.public_token;
  console.log("PUBLIC_TOKEN: ", PUBLIC_TOKEN);

  await client.exchangePublicToken(PUBLIC_TOKEN, function(
    error,
    tokenResponse
  ) {
    console.log("TOKEN RESONSE", tokenResponse);
    console.log("the error", error);
    if (error != null) {
      console.log("Could not exchange public_token!" + "\n" + error);
      console.log(Object.keys(error));
      return response.status(500).json(error);
    }
    ACCESS_TOKEN = tokenResponse.access_token;
    ITEM_ID = tokenResponse.item_id;
    console.log("Access Token: " + ACCESS_TOKEN);
    console.log("Item ID: " + ITEM_ID);
    response.json({ error: false });
  });
  // response.json("working");
});

app.post("/auth/get", (req, res, next) => {
  client.getAuth(ACCESS_TOKEN, {}, (err, results) => {
    // Handle err
    var accountData = results.accounts;
    if (results.numbers.ach.length > 0) {
      // Handle ACH numbers (US accounts)
      var achNumbers = results.numbers.ach;
    } else if (results.numbers.eft.length > 0) {
      // Handle EFT numbers (Canadian accounts)
      var eftNumbers = results.numbers.eft;
    }
    // console.log("ACCOUNT DATA: ", accountData);
    res.json(accountData);
  });
});

app.post("/transaction/get", (req, res, next) => {
  client.getTransactions(
    ACCESS_TOKEN,
    "2017-01-01",
    "2017-02-15",
    {
      count: 250,
      offset: 0
    },
    (err, result) => {
      // Handle err
      const transactions = result.transactions;
      console.log("TRANSACTIONS: ", transactions);
      res.json(transactions);
    }
  );
});

app.post("/accounts/balance/get", (req, res, next) => {
  client.getBalance(ACCESS_TOKEN, (err, result) => {
    // Handle err
    // Each account has up-to-date balance information associated with it
    const item = result.accounts;
    console.log("ITEM: ", item);
    res.json(item);
  });
});

app.post("/identity/get", (req, res, next) => {
  // Retrieve Identity data for an Item
  client.getIdentity(ACCESS_TOKEN, function(err, result) {
    // Handle err
    const info = result.info;
    res.json(info);
  });
});

app.post("/income/get", (req, res, next) => {
  client.getIncome(ACCESS_TOKEN, function(err, result) {
    // Handle err
    var income = result.income;
    res.json(income);
  });
});

app.listen(8000, () => {
  console.log("listening to server 8000");
});
