import { auth } from "./firebase"

//Sign Up
export const createUser = async (email, password) => {
  try {
    await auth.createUserWithEmailAndPassword(email,password).then(() => {console.log('Signed up!')})
  } catch (error) {
    console.error(error)
  }
}

//Log In
export const logIn = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email,password).then(() => {console.log('Logged in!')})
  } catch (error) {
    console.error(error)
  }
}

//Sign Out
export const signOut = async () => {
 try {
  await auth.signOut().then(() => {console.log('logged out!')})

 } catch (error) {
   console.error(error)
 }
}

