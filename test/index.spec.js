/* global describe beforeEach afterEach it */

import { expect } from "chai";
import { GET_PLAID, getPlaid } from "../src/Store/plaidContainer";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";
import history from "../history";
import { createStore } from "redux";

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
});
function exist(val) {
  if (val !== undefined) {
    return true;
  }
  return false;
}

describe("Secret keys work", () => {
  describe("Client_ID exist", () => {
    it("Client ID is not undefined", () => {
      const clientIdWorks = exist(process.env.CLIENT_ID);
      expect(clientIdWorks).to.be.deep.equal(true);
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
