import firebase from "firebase"

const firestore = firebase.firestore()

const intialState = {}

const GET_USER_PROFILE = "GET_USER_PROFILE"
const CHANGE_USER_INFO = "CHANGE_USER_INFO"
const ADD_USER = 'ADD_USER'

const addingUser = (payload) => ({type:ADD_USER, payload})

const changeUser = (changedUser) => {
  return {
    type: CHANGE_USER_INFO,
    paylaod: changedUser
  }
}

const getUser = (userData) => {
  return {
    type: GET_USER_PROFILE,
    payload: userData
  }
}

export const addUser = (payload) => async dispatch => {
  dispatch(addingUser(payload))
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

export const changeUserInfo = newInfo => dispatch => {
  try {
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        console.log(user)
        const userEmail = user.email
        const userRef = await firestore.collection('user').where('email',"==",userEmail.toString()).get()
        const docRefId = userRef.docs[0].id; 
        await firestore.collection('user').doc(""+docRefId+"").update({
          email: newInfo.email,
          name: newInfo.name
        })
        await user.updateEmail(newInfo.email.toString())
        const dataAPI = await firestore
          .collection("user")
          .doc("" + docRefId + "")
          .get()
          .then(user => user.data());
        console.log(dataAPI)
        // dispatch(changeUserInfo(dataAPI))
      }
    })
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