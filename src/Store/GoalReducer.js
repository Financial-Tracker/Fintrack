//Actions
import firebase from 'firebase'
const db = firebase.firestore()
const ADD_A_GOAL = 'ADD_A_GOAL'
const GET_ALL_GOALS = 'GET_ALL_GOALS'

//Action Creaters
const addingAGoalToReducer = (payload) => ({type: ADD_A_GOAL, payload})
const gotAllGoal = (payload) => ({type: GET_ALL_GOALS, payload})

//Thunks
export const addAGoal = (goal) => async dispatch => {
    try {
        console.log(goal)
        // go to fire base
        dispatch(addingAGoalToReducer(goal))
    } catch (error) {
        console.log(error)
    }
}

export const getAllGoal = () => async dispatch => {
    try {
        var aTuringRef = db.collection('users').doc('aturing');

            // var setAlan = await aTuringRef.set({
            // 'first': 'Alan',
            // 'middle': 'Mathison',
            // 'last': 'Turing',
            // 'born': 1912
            // });

            // db.collection('users').get()
            //     .then((snapshot) => {
            //     snapshot.forEach((doc) => {
            //         console.log(doc.id, '=>', doc.data());
            //     });
            //     })
            //     .catch((err) => {
            //     console.log('Error getting documents', err);
            //     });


            const data  = await db.collection('users').get() 
            let result = []
            data.forEach((doc)=> {
                    result.push(doc.data())
                })

           console.log(result)
        
    //     dispatch(gotAllGoal([{
    // Created: "8/19/2018",
    // additialInformation:"Additona info",
    // goalTitle:"Buy a boat",
    // howMuch:"400",
    // selectedDay:"8/30/2018"
    //     },
    // {Created: "8/16/2018",
    // additialInformation:"Additona info",
    // goalTitle:"Buy a cat",
    // howMuch:"700",
    // selectedDay:"8/20/2018"}
    // ]))
    } catch (error) {
        console.log(error)
    }
}

const initialState = {
    allGoals : [],
    isLoading : false
}


//Reducers 
const GoalReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_A_GOAL: 
        return {
            ...state,
            allGoals : [...state.allGoals, action.payload]
        }
        case GET_ALL_GOALS: 
        return {
            ...state,
            allGoals : action.payload
        }
        default: 
        return state;
    }

}

export default GoalReducer