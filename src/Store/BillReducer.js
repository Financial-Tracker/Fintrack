import firebase from "firebase";
const firestore = firebase.firestore();

//Actions 
const GET_ALL_BILLS  = 'GET_ALL_BILLS'
const ADD_BILL = 'ADD_BILL'

//Action Creater
const got_all_bill = (payload) => ({type : GET_ALL_BILLS, payload})
const added_bill = (payload) => ({
    type: ADD_BILL,
    payload
})

//Thunk
export const getAllBill = () => async dispatch => {
    try {
        firebase.auth().onAuthStateChanged(async user => {
            if(user) {
                const userEmail = user.email
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
                const allBills = dataAPI.Bills
            dispatch(got_all_bill(allBills))
            }
        })
    } catch (error) {
        console.error(error)
    }
}

export const addBill = (newBill) => async dispatch => {
    try {
        firebase.auth().onAuthStateChanged(async user => {
        if(user) {
            const userEmail = user.email
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
            if(!dataAPI.Bills){
                const newBills = []
                newBills.push(newBill)
                await firestore.collection('user').doc(docRefId.toString()).update({
                    Bills: newBills
                })
            }
            else{
                const newBills = [...dataAPI.Bills]
                newBills.push(newBill)
                await firestore.collection('user').doc(docRefId.toString()).update({
                    Bills: newBills
                })
            }
            dispatch(added_bill(newBill))
        }
    })
    } catch (error) {
        console.error(error)

    }
}

const initialState = {
    allBills : [],
    isLoading : false
}

const BillReducer = (state = initialState, action)=> {
    switch (action.type){
        case GET_ALL_BILLS:
            return {
                ...state,
                allBills : action.payload
            }
        case ADD_BILL:
            return {
                ...state,
                allBills: state.allBills? [...state.allBills, action.payload] : action.payload 
            }
        default: 
        return state;
    }
}

export default BillReducer