//Actions
import firebase from 'firebase'
const db = firebase.firestore()
const ADD_A_GOAL = 'ADD_A_GOAL'
const GET_ALL_GOALS = 'GET_ALL_GOALS'

//Action Creaters
const addingAGoalToReducer = (payload) => ({ type: ADD_A_GOAL, payload })
const gotAllGoal = (payload) => ({ type: GET_ALL_GOALS, payload })

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
                // console.log('HERE', addingGoals)
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
                allGoals: [...state.allGoals, action.payload]
            }
        case GET_ALL_GOALS:
            return {
                ...state,
                allGoals: action.payload
            }
        default:
            return state;
    }

}

export default GoalReducer