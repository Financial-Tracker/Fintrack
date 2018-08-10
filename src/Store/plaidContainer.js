const GET_PLAID = "GET_PLAID";
export const getPlaid = data => {
  return {
    type: GET_PLAID,
    payload: data
  };
};

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLAID:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;

//THUNK CREATORS
// export const fetchAuth = ()=>{
//     return async (dispatch)=>{
//         const {data} = await axios.post(`${path}/auth/get`);
//         const action = getAuth(data)
//         dispatch(action)
//     }
// }
// export const fetchTransactions = ()=>{
//     return async (dispatch)=>{
//         const {data} =  await axios.post(`${path}/transaction/get`);
//         const action = getTransaction(data)
//         dispatch(action)
//     }
// }
// export const fetchBalance = ()=>{
//     return async (dispatch)=>{
//         const {data} = await axios.post(`${path}/accounts/balance/get`);
//         const action = getBalance(data)
//         dispatch(action)
//     }
// }
// export const fetchId = ()=>{
//     return async (dispatch)=>{
//         const {data} = await axios.post(`${path}/identity/get`);
//         const action = getId(data)
//         dispatch(action)
//     }
// }
// export const fetchIncome = ()=>{
//     return async (dispatch)=>{
//         const {data} = await axios.post(`${path}/income/get`);
//         const action = getIncome(data)
//         dispatch(action)
//     }
// }

//CONSTANTS

// const GET_AUTH = 'GET_AUTH'
// const GET_TRANSACTION= 'GET_TRANSACTION'
// const GET_BALANCE = 'GET_BALANCE'
// const GET_ID = 'GET_ID'
// const GET_INCOME = 'GET_INCOME'

// //ACTION CREATORS
// const getAuth = (auth)=>{
//     return{
//         type: GET_AUTH,
//         payload: auth
//     }
// }

// const getTransaction = (transactions)=>{
//     return{
//         type: GET_TRANSACTION,
//         payload: transactions
//     }
// }

// const getBalance = (balance)=>{
//     return{
//         type: GET_BALANCE,
//         payload: balance
//     }
// }

// const getId = (id)=>{
//     return{
//         type: GET_ID,
//         payload: id
//     }
// }

// const getIncome = (income)=>{
//     return{
//         type: GET_INCOME,
//         paylaod: income
//     }
// }

// case GET_AUTH: return {...state, auth: action.payload}
// case GET_TRANSACTION: return {...state, transactions: action.payload}
// case GET_BALANCE: return{...state, balance: action.payload}
// case GET_ID: return{...state, id: action.payload}
// case GET_INCOME: return{...state, income: action.payload}
