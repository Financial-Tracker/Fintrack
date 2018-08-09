const { clientId, publicKey, secretKey } = require("../secret");

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
  // { version: "2018-05-22" }
);

app.use(volleyball);
app.use(cors());
// app.get("/get_access_token", (req, res) => {
//   res.json("hello ef");
// });
app.post("/get_access_token", async function(request, response, next) {
  console.log(request.body);
  PUBLIC_TOKEN = await request.body.public_token;
  console.log("PUBLIC_TOKEN: ", PUBLIC_TOKEN);

  client.exchangePublicToken(PUBLIC_TOKEN, function(error, tokenResponse) {
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

app.listen(8000, () => {
  console.log("listening to server 8000");
});
