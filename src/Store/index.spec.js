/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {GET_PLAID, getPlaid} from './plaidContainer'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import history from '../history'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('ACTION creator', () => {
  let store
  let mockAxios

  const initialState = {user: {}}

  beforeEach(() => {
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })
  if('getPlaid action creator has a type that equals GET_PLAID', () => {
    expect(getPlaid.type.to.be.equal(GET_PLAID)
  })
})
