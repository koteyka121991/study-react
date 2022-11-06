const ADD_WEIGHT = 'ADD-WEIGHT';
const UPDATE_NEW_WEIGHT_TEXT = 'UPDATE-NEW-WEIGHT-TEXT';
let initialState = {
    exerciseNameDate: [
        { id: 1, exercise: "Присяд" }
    ],
    diaryDate: [
        { id: 1, date: "29 суббота" }
    ],
    workoutWeight: [
        { id: 1, weight: 22}
    ],     
    workoutSet: [
        { id: 1, set: 1}
    ],        
    workoutApproaches: [
        { id: 1, approaches: 3 }
    ],
    newWorkoutWeightText: ""
}
const diaryReduser =(state=initialState, action) => {
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