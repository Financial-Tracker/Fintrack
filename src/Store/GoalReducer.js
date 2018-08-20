//Actions
import firebase from 'firebase'
const db = firebase.firestore()
const ADD_A_GOAL = 'ADD_A_GOAL'
const GET_ALL_GOALS = 'GET_ALL_GOALS'
const REMOVE_GOAL = 'REMOVE_GOAL'
//Action Creaters
const addingAGoalToReducer = (payload) => ({ type: ADD_A_GOAL, payload })
const gotAllGoal = (payload) => ({ type: GET_ALL_GOALS, payload })
const removeGoal = payload => ({ type: REMOVE_GOAL, payload })


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
export const destroyingGoal = goalId => async dispatch => {
    // console.log(goalId)
    // dispatch(removeGoal(goalId))
    try {
        firebase.auth().onAuthStateChanged(async user => {
            if (user) {
                const userEmail = user.email
                const userRef = await db
                    .collection("user")
                    .where("email", "==", userEmail.toString())
                    .get();
                const docRefId = await userRef.docs[0].id;
                const destroyGoals = await db.collection('user').doc(docRefId.toString()).update({
                    Goals: firebase.firestore.FieldValue.arrayRemove(goalId)
                })
                // console.log('DESTRA', destroyGoals)
                dispatch(removeGoal(goalId))

            }
        })

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
                allGoals: state.allGoals.filter((goal, index) => index !== action.payload)
            }
        default:
            return state;
    }

}

export default GoalReducer