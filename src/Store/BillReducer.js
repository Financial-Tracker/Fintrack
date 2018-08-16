import firebase from "firebase";
const firestore = firebase.firestore();

//Actions 
const GET_ALL_BILLS  = 'GET_ALL_BILLS'


//Action Creater
const got_all_bill = (payload) => ({type : GET_ALL_BILLS, payload})

//Thunk

export const getAllBill = () => async dispatch => {
    try {
        
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
        default: 
        return state;
    }
}

export default BillReducer