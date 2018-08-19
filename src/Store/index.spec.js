/* global describe beforeEach afterEach it */

import { expect } from "chai";
import {
  getPlaid,
  removePlaid,
  getTransactions,
  updatePlaidBudget
} from "./plaidContainer";
import axios from "axios";
// import MockAdapter from "axios-mock-adapter";
// import configureMockStore from "redux-mock-store";
// import thunkMiddleware from "redux-thunk";
// import history from "../history";
import { createStore } from "redux";
// import * as firebase from "firebase";
// import firebase from "firebase";
// import admin from "firebase-admin";
// var app = admin.initializeApp();
// var firebasemock = require("firebase-mock");
// var proxyquire = require("proxyquire");
// let mockfirebase = require("mockfirebase").MockFirebase;
// var plaidContainer = proxyquire("./plaidContainer", {
//   firestore: function(url) {
//     return (mock = new MockFirebase(url));
//   }
// });

// var mockfirestore = new firebasemock.MockFirestore();
// var foo = proxyquire("./plaidContainer", { firestore: mockfirestore });

const plaidData = { test: "spect" };

describe("Action creators", () => {
  describe("getPlaid", () => {
    it("returns properly formatted action", () => {
      const plaid = getPlaid(plaidData);
      expect(plaid).to.be.deep.equal({
        type: "GET_PLAID",
        payload: plaidData
      });
    });
  });
  describe("removePlaid", () => {
    it("removes the information", () => {
      const plaid = removePlaid();
      expect(plaid).to.be.deep.equal({
        type: "REMOVE_PLAID",
        payload: {}
      });
    });
  });
  describe("updatePlaidBudget", () => {
    it("update Plaid", () => {
      const payload = { spec: "is Updated" };
      const plaid = updatePlaidBudget(payload);
      expect(plaid).to.be.deep.equal({
        type: "UPDATE_BUDGET",
        payload: payload
      });
    });
  });
});

// const middlewares = [thunkMiddleware]
// const mockStore = configureMockStore(middlewares)

// describe('ACTION creator', () => {
//   let store
//   let mockAxios

//   const initialState = {user: {}}

//   beforeEach(() => {
//     store = mockStore(initialState)
//   })

//   afterEach(() => {
//     mockAxios.restore()
//     store.clearActions()
//   })
//   if('getPlaid action creator has a type that equals GET_PLAID', () => {
//     expect(getPlaid.type.to.be.equal(GET_PLAID)
//   })
// })
