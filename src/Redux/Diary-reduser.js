const ADD_WEIGHT = 'ADD-WEIGHT';
const UPDATE_NEW_WEIGHT_TEXT = 'UPDATE-NEW-WEIGHT-TEXT';
const diaryReduser =(state, action) => {
    if (action.type === ADD_WEIGHT) {
        let text = state.newWorkoutWeightText;
        state.newWorkoutWeightText = '';
        state.workoutWeight.push( { id: 2, weight: text},);
       
    } else if (action.type === UPDATE_NEW_WEIGHT_TEXT) {
        state.newWorkoutWeightText = action.text;
       
    }
    return state;
    }
    export const addWeightCreator = () => ({
        type: ADD_WEIGHT
    })
    export const updateNewWeightTextCreator = (text) => ({
        type: UPDATE_NEW_WEIGHT_TEXT, text: text
    })
    export default diaryReduser;