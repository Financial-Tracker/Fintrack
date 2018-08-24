import firebase from "firebase";

export const firestore =
  process.env.NODE_ENV === "test" ? null : firebase.firestore();

const GET_PLAID = "GET_PLAID";
const GET_TRANSACTIONS = "GET_TRANSACTIONS";
const REMOVE_PLAID = "REMOVE_PLAID";
const UPDATE_BUDGET = "UPDATE_BUDGET";

const LOADING = "LOADING";
const GET_MONTH = "GET_MONTH";

const startLoading = () => ({ type: LOADING });

export const getPlaid = data => {
  return {
    type: GET_PLAID,
    payload: data
  };
};
export const removePlaid = () => {
  return {
    type: REMOVE_PLAID,
    payload: {}
  };
};

export const getMonth = month => {
  return {
    type: GET_MONTH,
    payload: month
  };
};

export const getTransactions = plaidData => {
  return {
    type: GET_TRANSACTIONS,
    payload: plaidData
  };
};

export const updatePlaidBudget = newPlaidData => {
  return {
    type: UPDATE_BUDGET,
    payload: newPlaidData
  };
};

export const getLoad = () => dispatch => {
  dispatch(startLoading());
};

export const getDataFromFireStore = () => async dispatch => {
  try {
    const user = firebase.auth().currentUser;
    if (user) {
      // User is signed in.
      const userEmail = user.email;
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
      if(dataAPI.transaction){
      const transMonth = await dataAPI.transaction.filter(transaction => {
        if (
          transaction.date.substring(0, 4) == year &&
          transaction.date.substring(5, 7) == month
        ) {
          return true;
        } else {
          return false;
        }
      });

      const budget = dataAPI.budget;
      const income = dataAPI.income.income_streams[0].monthly_income;
      dataAPI.action = { transMonth, monthlyIncome: income, budget: budget };
      const action = getPlaid(dataAPI);
      dispatch(action);
    }else {
      dispatch(getPlaid({}))
    }
    } else {
      // No user is signed in.
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateBudget = newBudget => async dispatch => {
  try {
    dispatch(startLoading());
    const userEmail = firebase.auth().currentUser.email;
    const userRef = await firestore
      .collection("user")
      .where("email", "==", userEmail.toString())
      .get();
    const docRefId = userRef.docs[0].id;
    await firestore
      .collection("user")
      .doc("" + docRefId + "")
      .update({ budget: newBudget })
      .then(() => {
        console.log("updated!");
      })
      .catch(error => {
        console.log(error);
      });

    const dataAPI = await firestore
      .collection("user")
      .doc("" + docRefId + "")
      .get()
      .then(user => user.data());
    console.log("data", dataAPI);
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    if(dataAPI.transaction){
    const transMonth = await dataAPI.transaction.filter(transaction => {
      if (
        transaction.date.substring(0, 4) == year &&
        transaction.date.substring(5, 7) == month
      ) {
        return true;
      } else {
        return false;
      }
    });
    const budget = dataAPI.budget;
    const income = dataAPI.income.income_streams[0].monthly_income;
    dataAPI.action = { transMonth, monthlyIncome: income, budget: budget };
    dispatch(updatePlaidBudget(dataAPI));
  }else {
    dispatch(updatePlaidBudget({}))
  }
  } catch (error) {
    console.error(error);
  }
};

export const removeDataFromFireStore = () => {
  return async dispatch => {
    const userEmail = firebase.auth().currentUser.email;
    const userRef = await firestore
      .collection("user")
      .where("email", "==", userEmail.toString())
      .get();
    const docRefId = await userRef.docs[0].id;
    const dataAPI = await firestore.collection("user").doc("" + docRefId + "");
    const deletePLaid = await dataAPI
      .update({
        auth: firebase.firestore.FieldValue.delete(),
        balance: firebase.firestore.FieldValue.delete(),
        income: firebase.firestore.FieldValue.delete(),
        transaction: firebase.firestore.FieldValue.delete()
      })
      .then(() => {
        console.log("deleted");
      })
      .catch(error => console.error(error));
    console.log("REMOVE PLAID: ", deletePLaid);
    const action = removePlaid(deletePLaid);
    dispatch(action);
  };
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

      if(dataAPI.transaction){
      const transMonth = await dataAPI.transaction.filter(transaction => {
        if (
          transaction.date.substring(0, 4) == year &&
          transaction.date.substring(5, 7) == month
        ) {
          return true;
        } else {
          return false;
        }
      });
      const budget = dataAPI.budget;
      const income = dataAPI.income.income_streams[0].monthly_income;
      const action = { transMonth, monthlyIncome: income, budget: budget };
      dispatch(getMonth(action));
    }else {
      dispatch(getMonth({}))
    }
    }
  });
};
const initialState = {
  isLoading: false,
  plaidData: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true
      };

    case GET_PLAID:
      return {
        ...state,
        isLoading: false,
        plaidData: action.payload
      };

    case GET_MONTH:
      return {
        ...state,
        isLoading: false,
        month: action.payload
      };
    case GET_TRANSACTIONS:
      return {
        isLoading: false,
        plaidData: action.payload
      };
    case REMOVE_PLAID:
      return {
        ...state,
        isLoading: false,
        plaidData: {}
      }
    case UPDATE_BUDGET:
      return {
        ...state,
        isLoading: false,
        plaidData: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
