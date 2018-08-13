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
        console.log('firebase.auth(): ', firebase.auth())
        console.log('firebase.auth().currentUser', firebase.auth().currentUser)
        firebase.auth().onAuthStateChanged( async(user) =>{
            if (user) {
                // User is signed in.
                const userEmail = firebase.auth().currentUser.email
            console.log('user email: ', userEmail)
            const userRef = await firestore.collection('user').where('email', "==", userEmail.toString()).get()
            console.log("user Ref:", userRef)
            const docRefId = await userRef.docs[0].id;
            console.log("doc ref Id: ", docRefId)
            const dataAPI = await firestore.collection('user').doc("" + docRefId + "").get().then(user => user.data())
            console.log(dataAPI, "AFTER BABY")
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
