import React, { Component } from "react";
import PlaidLink from "react-plaid-link";
import axios from "axios";
const path = "http://localhost:8000";

export default class Plaid extends Component {
  state = {
    data: {},
    status: "LOGIN_BUTTON"
  };

  render() {
    console.log(this.state.status);

    switch (this.state.status) {
      case "CONNECTED":
        console.log("connected");
        return this.renderDetails();
      case "LOGIN_BUTTON":
      case "EXIT":
        return this.renderButton();
      default:
        return this.renderLogin();
    }
  }

  renderButton = () => {
    return (
      <div>
        <button onClick={() => this.setState({ status: "" })} />
        <p>Login with Plaid</p>
      </div>
    );
  };

  onLoadStart = props => {
    console.log("onLoadStart", props);
  };

  onLoad = props => {
    console.log("onLoad", props);
  };

  onLoadEnd = props => {
    console.log("onLoadEnd", props);
  };
  onSuccess = async (token, metadata) => {
    console.log();
    console.log("onSuccess", token);
    console.log(metadata, "arg");

    const { data } = await axios.post(`${path}/get_access_token`, {
      public_token: metadata.public_token,
      accounts: metadata.accounts,
      institution: metadata.institution,
      link_session_id: metadata.link_session_id
    });
    const authData = await axios.post(`${path}/auth/get`);
    const auth = authData.data;
    console.log(auth);
    const transactionData = await axios.post(`${path}/transaction/get`);
    const transaction = transactionData.data;
    console.log(transaction);
    const balanceData = await axios.post(`${path}/accounts/balance/get`);
    const balance = balanceData.data;
    console.log(balance);
    const idData = await axios.post(`${path}/identity/get`);
    const id = idData.data;
    console.log(id);
    const incomeData = await axios.post(`${path}/income/get`);
    const income = incomeData.data;
    console.log(income);

    // console.log(data);

    //   fetch(`${path}/get_access_token`, {
    //     method: "POST",
    //     body: {
    //       public_token: metadata.public_token,
    //       accounts: metadata.accounts,
    //       institution: metadata.institution,
    //       link_session_id: metadata.link_session_id
    //     }
    //   });
  };
  onMessage = data => {
    console.log(data);

    /*
      Response example for success
      {
        "action": "plaid_link-undefined::connected",
        "metadata": {
          "account": {
            "id": null,
            "name": null
          },
          "account_id": null,
          "public_token": "public-sandbox-e697e666-9ac2-4538-b152-7e56a4e59365",
          "institution": {
            "name": "Chase",
            "institution_id": "ins_3"
          }
        }
      }
    */

    this.setState({
      data,
      status: data.action.substr(data.action.lastIndexOf(":") + 1).toUpperCase()
    });
  };

  renderLogin() {
    console.log("Plaid.renderLogin", this);
    return (
      <PlaidLink
        clientName="Fintrack"
        onMessage={this.onMessage}
        publicKey="faa176d98c3dd1ab8813a01cc0bc8f"
        env="sandbox"
        product={["auth", "transactions"]}
        onLoad={this.onLoad}
        onLoadStart={this.onLoadStart}
        onLoadEnd={this.onLoadEnd}
        onSuccess={this.onSuccess}
      >
        Open and connect to plaid
      </PlaidLink>
    );
  }

  renderDetails() {
    return (
      <div>
        <div>Institution</div>
        <div>{this.state.data.metadata.institution.name}</div>
        <div>Institution ID</div>
        <div>{this.state.data.metadata.institution.institution_id}</div>
        <div>Token</div>
        <div>{this.state.data.metadata.public_token}</div>
      </div>
    );
  }

  // onMessage = data => {
  //   console.log(data)
  //   /*
  //     Response example for success
  //     {
  //       "action": "plaid_link-undefined::connected",
  //       "metadata": {
  //         "account": {
  //           "id": null,
  //           "name": null
  //         },
  //         "account_id": null,
  //         "public_token": "public-sandbox-e697e666-9ac2-4538-b152-7e56a4e59365",
  //         "institution": {
  //           "name": "Chase",
  //           "institution_id": "ins_3"
  //         }
  //       }
  //     }
  //   */

  //   this.setState({ data, status: data.action.substr(data.action.lastIndexOf(':') + 1).toUpperCase() });
  // };
}
