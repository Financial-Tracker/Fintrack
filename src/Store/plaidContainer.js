import firebase from 'firebase'
const firestore = firebase.firestore();

const GET_PLAID = 'GET_PLAID'
export const getPlaid = (data) => {
    return {
        type: GET_PLAID,
        payload: data
    }
}
export const getDataFromFireStore = () => async dispatch => {
    try {
        firebase.auth().onAuthStateChanged( async(user) =>{
            if (user) {
                // User is signed in.
                const userEmail = firebase.auth().currentUser.email
            const userRef = await firestore.collection('user').where('email', "==", userEmail.toString()).get()
            const docRefId = await userRef.docs[0].id;
            const dataAPI = await firestore.collection('user').doc("" + docRefId + "").get().then(user => user.data())
            const action = getPlaid(dataAPI)
            dispatch(action)
            } else {
                // No user is signed in.
            }
        });
        

    } catch (error) {
        console.error(error)
    }

}
const initialState = {}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PLAID:
            return action.payload
        default:
            return state
    }
}

export default reducer
