
import firebase from 'firebase'
const db = firebase.firestore()

//Actions
const ADD_A_GOAL = 'ADD_A_GOAL'
const GET_ALL_GOALS = 'GET_ALL_GOALS'
const REMOVE_GOAL = 'REMOVE_GOAL'
const GET_GOAL = 'GET_GOAL'
const EDIT_GOAL = 'EDIT_GOAL'

//Action Creaters
const addingAGoalToReducer = (payload) => ({ type: ADD_A_GOAL, payload })
const gotAllGoal = (payload) => ({ type: GET_ALL_GOALS, payload })
const removeGoal = payload => ({ type: REMOVE_GOAL, payload })
const getGoal = payload => ({type: GET_GOAL, payload})
const editGoal = payload => ({ type: EDIT_GOAL, payload})

//Thunks
export const addAGoal = (goal) => async dispatch => {
    try {
        firebase.auth().onAuthStateChanged(async user => {
            if (user) {
                const userEmail = user.email
                const userRef = await db
                    .collection("user")
                    .where("email", "==", userEmail.toString())
                    .get();
                const docRefId = await userRef.docs[0].id;
                const addingGoals = await db.collection('user').doc(docRefId.toString()).update({
                    Goals: firebase.firestore.FieldValue.arrayUnion(goal)
                })
                dispatch(addingAGoalToReducer(goal))

            }
        })

    } catch (error) {
        console.log(error)
    }
}

export const getSingleGoal = (goalID) => async dispatch => {
    try {
        const user = firebase.auth().currentUser
        const userEmail = user.email;
        const userRef = await db
        .collection("user")
        .where("email", "==", userEmail.toString())
        .get();
        const docRefId = await userRef.docs[0].id;
        const dataAPI = await db
        .collection("user")
        .doc("" + docRefId + "")
        .get()
        .then(user => user.data());
        var goal = dataAPI.Goals[goalID]
        dispatch(getGoal(goal))
    } catch (error) {
        console.error(error)
    }
}

export const editSingleGoal = (edittedGoal, goalId) => async dispatch => {
    try {
        console.log("edittedGoal: ", edittedGoal)
        console.log("goalId: ", goalId)
        const user = firebase.auth().currentUser
        const userEmail = user.email;
        const userRef = await db
        .collection("user")
        .where("email", "==", userEmail.toString())
        .get();
        const docRefId = await userRef.docs[0].id;
        const dataAPI = await db
        .collection("user")
        .doc("" + docRefId + "")
        .get()
        .then(user => user.data())
        let goals = dataAPI.Goals
        let newGoals = []
        for(var i = 0; i < goals.length; i++) {        
            if(i == goalId) {
                newGoals.push(edittedGoal)
            }
            else {
                newGoals.push(goals[i])
            }
        }
        await db.collection('user').doc("" + docRefId + "").update({
            Goals: newGoals
        })
        dispatch(editGoal(newGoals))
    } catch (error) {
        console.error(error)
    }
}

export const getAllGoal = () => async dispatch => {
    try {
        firebase.auth().onAuthStateChanged(async user => {
            if (user) {
                // console.log('USER', user)
                const userEmail = user.email
                const goals = await db.collection('user').where("email", "==", userEmail.toString()).get().then(snapshot => {
                    snapshot.docs.map(doc => dispatch(gotAllGoal(doc.data().Goals))
                    )
                })
            }
        })
    } catch (error) {
        console.log(error)
    }
}
export const destroyingGoal = (dataId) => async dispatch => {
    try {
        const user = firebase.auth().currentUser
        const userEmail = user.email;
        const userRef = await db
        .collection("user")
        .where("email", "==", userEmail.toString())
        .get();
        const docRefId = await userRef.docs[0].id;
        const dataAPI = await db
        .collection("user")
        .doc("" + docRefId + "")
        .get()
        .then(user => user.data());
        var goals = dataAPI.Goals
        var newGoals = goals.filter((goal, index) => {
            return (index != dataId)
        })
        await db.collection("user").doc("" + docRefId + "").update({Goals: newGoals}).then(() => {
            "array updated"
        }).catch(error => console.error(error))
        dispatch(removeGoal(newGoals))
    } catch (error) {
        console.error(error)
    }
}

const initialState = {
    allGoals: [],
    isLoading: false
}


//Reducers 
const GoalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_A_GOAL:
            return {
                ...state,
                allGoals: state.allGoals ? [...state.allGoals, action.payload] : action.payload
            }
        case GET_GOAL:
            return{
                ...state,
                allGoals: action.payload
            }
        case GET_ALL_GOALS:
            return {
                ...state,
                allGoals: action.payload
            }
        case REMOVE_GOAL:
            console.log('ACTION', action)
            // return state
            return {
                ...state,
                allGoals: action.payload
            }
        default:
            return state;
    }

}

export default GoalReducer