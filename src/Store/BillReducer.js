import firebase from "firebase";
import EditBill from "../allComponents/EditBill";
const firestore = firebase.firestore();

const initialState = {
    allBills: [],
    paidBills: [],
    isLoading: false
  };

//Actions
const GET_ALL_BILLS = "GET_ALL_BILLS";
const ADD_BILL = "ADD_BILL";
const GET_SINGLE_BILL = "GET_SINGLE_BILL";
const EDIT_BILL = "EDIT_BILL";
const PAY_BILL = "PAY_BILL"
const DELETE_BILL = "DELETE_BILL"

//Action Creater
const got_all_bill = payload => ({ type: GET_ALL_BILLS, payload });
const added_bill = payload => ({ type: ADD_BILL, payload });
const got_single_bill = payload => ({type: GET_SINGLE_BILL, payload})
const editted_bill = payload => ({type: EDIT_BILL, payload}) 
const pay_bill = payload => ({type: PAY_BILL, payload})
const delete_bill = payload => ({type: DELETE_BILL, payload})

//Thunk
export const payBill = (billID) => async dispatch => {
  try {
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
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
        const allBills = dataAPI.Bills;
        const paid = dataAPI.Bills[billID]
        const newBills = allBills.filter((element, index) => {
          if (index !== billID) {
            return element
          }
        })
        console.log(newBills)
        var paidOutput = []
        if (!dataAPI.PaidBills) {
          const PaidBills = [];
          PaidBills.push(paid);
          await firestore
            .collection("user")
            .doc(docRefId.toString())
            .update({
              PaidBills: paid,
              Bills: newBills,
            });
          paidOutput = PaidBills

        } else {
          const PaidBills = [...dataAPI.PaidBills];
          PaidBills.push(paid);
          await firestore
            .collection("user")
            .doc(docRefId.toString())
            .update({
              PaidBills: PaidBills,
              Bills: newBills,
            });
            paidOutput = PaidBills
        }
        const output = {paidBills: paidOutput, allBills: newBills}
        dispatch(pay_bill(output))
      }
    });
  } catch (error) {
    console.error(error)
  }
}

export const deleteBill = idx => async dispatch => {
  try {
    firebase.auth().onAuthStateChanged(async user => {
      if(user) {
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
        const paidBills = dataAPI.PaidBills
        const newPaidBills = paidBills.filter((el, index) => {
          if(idx !== index){
            return el
          }
        })
        await firestore
            .collection("user")
            .doc(docRefId.toString())
            .update({
              PaidBills: newPaidBills,
            });
        dispatch(delete_bill(newPaidBills))
      }
    })
  } catch (error) {
    console.error(error)
  }
}

export const getAllBill = () => async dispatch => {
  try {
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
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
        const allBills = dataAPI.Bills;
        const paidBills = dataAPI.PaidBills
        dispatch(got_all_bill({allBills, paidBills}));
      }
    });
  } catch (error) {
    console.error(error);
  }
};

export const addBill = newBill => async dispatch => {
  try {
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
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
        if (!dataAPI.Bills) {
          const newBills = [];
          newBills.push(newBill);
          await firestore
            .collection("user")
            .doc(docRefId.toString())
            .update({
              Bills: newBills
            });
        } else {
          const newBills = [...dataAPI.Bills];
          newBills.push(newBill);
          await firestore
            .collection("user")
            .doc(docRefId.toString())
            .update({
              Bills: newBills
            });
        }
        dispatch(added_bill(newBill));
      }
    });
  } catch (error) {
    console.error(error);
  }
};

export const getSingleBill = (billID) => async dispatch => {
    try {
        const user = firebase.auth().currentUser
        const userEmail = user.email;
        const userRef = await firestore
        .collection("user")
        .where("email", "==", userEmail.toString())
        .get();
        const docRefId = await userRef.docs[0].id;
        const dataAPI = await firestore
        .collection("user")
        .doc(docRefId.toString())
        .get()
        .then(user => user.data());
        var bill = dataAPI.Bills[billID]
        dispatch(got_single_bill(bill))
    } catch (error) {
        console.error(error)
    }
}

export const editSingleBill = (updatedBill, billID) => async dispatch => {
    try {
        const user = firebase.auth().currentUser
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
        .then(user => user.data())
        let bills = dataAPI.Bills
        let newBills = []
        for(var i = 0; i < bills.length; i++) {        
            if(i == billID) {
                newBills.push(updatedBill)
            }
            else {
                newBills.push(bills[i])
            }
        }
        await firestore.collection('user').doc(docRefId.toString()).update({
            Bills: newBills
        })
        dispatch(editted_bill(newBills))
    } catch (error) {
        console.error(error)
    }
} 


//REDUCER
const BillReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BILLS:
      return {
        ...state, allBills: action.payload.allBills, paidBills: action.payload.paidBills
      }
    case DELETE_BILL:
      return{
        ...state, paidBills: action.payload
      }
    case ADD_BILL:
      return {
        ...state,
        allBills: state.allBills
          ? [...state.allBills, action.payload]
          : action.payload
      };
    case GET_SINGLE_BILL:
      return {
          ...state, allBills: action.payload
      }
    case EDIT_BILL:
      return {
        ...state, allBills: action.payload
      }
    case PAY_BILL:
      return {
        ...state, allBills: action.payload.allBills, paidBills: action.payload.paidBills
      }
    default:
      return state;
  }
};

export default BillReducer;
