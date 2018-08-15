import firebase from "firebase";
const firestore = firebase.firestore();

const GET_PLAID = "GET_PLAID";
const GET_TRANSACTIONS = "GET_TRANSACTIONS";

export const getPlaid = data => {
  return {
    type: GET_PLAID,
    payload: data
  };
};

export const getTransactions = plaidData => {
  return {
    type: GET_TRANSACTIONS,
    payload: plaidData
  };
};

export const getDataFromFireStore = () => async dispatch => {
  try {
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        // User is signed in.
        const userEmail = firebase.auth().currentUser.email;
        const userRef = await firestore
          .collection("user")
          .where("email", "==", userEmail.toString())
          .get();
        const docRefId = await userRef.docs[0].id;
        const dataAPI = await firestore
          .collection("user")
          .doc("" + docRefId + "")
          .get()
          .then(user => user.data());
        const action = getPlaid(dataAPI);
        dispatch(action);
      } else {
        // No user is signed in.
      }
    });
  } catch (error) {
    console.error(error);
  }
};

export const getTransactionsByCurrentMonth = () => async dispatch => {
  firebase.auth().onAuthStateChanged(async user => {
    if (user) {
      // User is signed in.
      const userEmail = firebase.auth().currentUser.email;
      const userRef = await firestore
        .collection("user")
        .where("email", "==", userEmail.toString())
        .get();
      const docRefId = await userRef.docs[0].id;
      const dataAPI = await firestore
        .collection("user")
        .doc("" + docRefId + "")
        .get()
        .then(user => user.data());
      const currentDate = new Date();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
      const transMonth = dataAPI.transaction.filter(transaction => {
        if (
          transaction.date.substring(0, 4) == year &&
          transaction.date.substring(5, 7) == month
        ) {
          return true;
        } else {
          return false;
        }
      });
      // dataAPI.transactions

      const action = getPlaid(transMonth);
      dispatch(action);
    }
  });
};
const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLAID:
      return action.payload;
    case GET_TRANSACTIONS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
