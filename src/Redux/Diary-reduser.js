const ADD_WEIGHT = 'ADD-WEIGHT';
const UPDATE_NEW_WEIGHT_TEXT = 'UPDATE-NEW-WEIGHT-TEXT';
const ADD_SET = 'ADD-SET';
const UPDATE_NEW_SET_TEXT = 'UPDATE-NEW-SET-TEXT';
const ADD_APPROACHES = 'ADD-APPROACHES';
const UPDATE_NEW_APPROACHES_TEXT = 'UPDATE-NEW-APPROACHES-TEXT';
let initialState = {
    exerciseNameDate: [
        { id: 1, exercise: "Присяд" }
    ],
    diaryDate: [
        { id: 1, date: "29 суббота" }
    ],
    workoutWeight: [
        { id: 1, weight: 22 }
    ],
    workoutSet: [
        { id: 1, set: 1 }
    ],
    workoutApproaches: [
        { id: 1, approaches: 3 }
    ],
    newWorkoutWeightText: "",
    newWorkoutSetText: "",
    newWorkoutApproachesText: ""
}
const diaryReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WEIGHT:
            let textWeight = state.newWorkoutWeightText;
            state.newWorkoutWeightText = '';
            state.workoutWeight.push({ id: 2, weight: textWeight });
            return state;
        case UPDATE_NEW_WEIGHT_TEXT:
            state.newWorkoutWeightText = action.text;
            return state;
        case ADD_SET:
            let textSet = state.newWorkoutSetText;
            state.newWorkoutSetText = '';
            state.workoutSet.push({ id: 2, set: textSet });
            return state;
        case UPDATE_NEW_SET_TEXT:
            state.newWorkoutSetText = action.text;
            return state;
        case ADD_APPROACHES:
            let textApproaches = state.newWorkoutApproachesText;
            state.newWorkoutApproachesText = '';
            state.workoutApproaches.push({ id: 1, approaches: textApproaches });
            return state;
        case UPDATE_NEW_APPROACHES_TEXT:
            state.newWorkoutApproachesText = action.text;
            return state;
        default:
            return state;
    }
}
export const addWeightCreator = () => ({
    type: ADD_WEIGHT
})
export const updateNewWeightTextCreator = (text) => ({
    type: UPDATE_NEW_WEIGHT_TEXT, text: text
})
export const addSetCreator = () => ({
    type: ADD_SET
})
export const updateNewSetTextCreator = (text) => ({
    type: UPDATE_NEW_SET_TEXT, text: text
})
export const addApproachesCreator = () => ({
    type: ADD_APPROACHES
})
export const updateNewApproachesTextCreator = (text) => ({
    type: UPDATE_NEW_APPROACHES_TEXT, text: text
})

export default diaryReduser;