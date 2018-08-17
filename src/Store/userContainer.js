import firebase from "firebase"

const firestore = firebase.firestore()

const intialState = {}

const GET_USER_PROFILE = "GET_USER_PROFILE"



const getUser = (userData) => {
  return {
    type: GET_USER_PROFILE,
    payload: userData
  }
}

export const getUserProfileInfo = () => async dispatch => {
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
      .then(user => user.data());
    const output = { 
      created: user.metadata.creationTime,
      access: user.metadata.lastSignInTime,
      name: dataAPI.name,
      email: dataAPI.email
    }
    dispatch(getUser(output))
  } catch (error) {
    console.error(error)
  }
}

const reducer = (state = intialState, action) => {
  switch(action.type) {
    default:
      return state
    case GET_USER_PROFILE:
      return action.payload
  }
}

export default reducer