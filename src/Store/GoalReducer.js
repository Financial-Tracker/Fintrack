//Actions
const ADD_A_GOAL = 'ADD_A_GOAL'

//Action Creaters
const addingAGoalToReducer = (payload) => ({type: ADD_A_GOAL, payload})

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
        default: 
        return state;
    }

}

export default GoalReducer