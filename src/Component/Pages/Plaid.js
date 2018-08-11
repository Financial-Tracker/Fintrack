import React, { Component } from "react";
import PlaidLink from "react-plaid-link";
import axios from "axios";
import firebase from 'firebase'
import {getPlaid} from '../../Store/plaidContainer'
import{connect} from 'react-redux'
const path = "http://localhost:8000";
const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);


class Plaid extends Component {
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
        <button onClick={() => this.setState({ status: "" })} >Link Account</button>
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
    console.log("onSuccess", token);
    console.log('METADATA: ', metadata);

    await axios.post(`${path}/get_access_token`, {
      public_token: metadata.public_token,
      accounts: metadata.accounts,
      institution: metadata.institution,
      link_session_id: metadata.link_session_id
    });
    const authData = await axios.post(`${path}/auth/get`);
    const auth = authData.data;
    console.log("AUTH: ", auth);
    const transactionData = await axios.post(`${path}/transaction/get`);
    const transaction = transactionData.data;
    console.log("TRANSACTION: ", transaction);
    const balanceData = await axios.post(`${path}/accounts/balance/get`);
    const balance = balanceData.data;
    console.log("BALANCE: ", balance);
    const idData = await axios.post(`${path}/identity/get`);
    const id = idData.data;
    console.log(id);
    const incomeData = await axios.post(`${path}/income/get`);
    const income = incomeData.data;
    console.log("INCOME: ", income);
    const plaidObj = {auth, transaction, balance, id, income}


    const userEmail = firebase.auth().currentUser.email
    console.log('user email: ', userEmail)

    const newPlaid = {...plaidObj, email: userEmail}

    const userRef = await firestore.collection('user').where('email',"==",userEmail.toString()).get()
    console.log("user Ref:", userRef)
    

    const docRefId = userRef.docs[0].id;
    console.log("doc ref Id: ", docRefId)
    


    firestore.collection('user').doc(""+docRefId+"").set(newPlaid).then(() => {
      console.log("YEAH BABY")
    }).catch(() => {
      console.log("error")
    })
    const dataAPI = await firestore.collection('user').doc(""+docRefId+"").get().then(user=>user.data())
    console.log(dataAPI, "AFTER BABY")

    this.props.getPlaid(dataAPI);
    this.props.history.push('/bankInfo')
  };
  onMessage = data => {
    console.log(data);


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

  
}

const mapDisaptch = (dispatch)=>{
  return{
    getPlaid: (data)=>dispatch(getPlaid(data))
  }
}

export default connect(null, mapDisaptch)(Plaid)