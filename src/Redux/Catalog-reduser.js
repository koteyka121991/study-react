const UPDATE_NEW_EXERCISES_TEXT = 'UPDATE-NEW-EXERCISES-TEXT';
const ADD_EXERCISES = 'ADD_EXERCISES';
const UPDATE_NEW_BODY_PART_TEXT = 'UPDATE-NEW-BODY-PART-TEXT';
const ADD_BODY_PART = 'ADD-BODY-PART';
const catalogReduser = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_EXERCISES_TEXT:
            state.newExercisesText = action.text;
            return state;
        case ADD_EXERCISES:
            let textExercises = state.newExercisesText;
            state.newExercisesText = '';
            state.listExercises.push({ id: 5, label: textExercises },);
            return state;
        case UPDATE_NEW_BODY_PART_TEXT:
            state.newBodyPartText = action.text;
            return state;
        case ADD_BODY_PART:
            let textBodyPart = state.newBodyPartText;
            state.newBodyPartText = '';
            state.bodyPart.push({ id: 3, label: textBodyPart },);
            return state;
        default:
            return state;

    }
   
}
export const addExercisesCreator = () => ({
    type: ADD_EXERCISES
})
export const updateNewExercisesTextCreator = (text) => ({
    type: UPDATE_NEW_EXERCISES_TEXT, text: text
})
export const addBodyPartCreator = () => ({
    type: ADD_BODY_PART
})
export const updateBodyPartTextCreator = (text) => ({
    type: UPDATE_NEW_BODY_PART_TEXT, text: text
})
export default catalogReduser;