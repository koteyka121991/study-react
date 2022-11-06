const ADD_WEIGHT = 'ADD-WEIGHT';
const UPDATE_NEW_WEIGHT_TEXT = 'UPDATE-NEW-WEIGHT-TEXT';

const UPDATE_NEW_EXERCISES_TEXT = 'UPDATE-NEW-EXERCISES-TEXT';
const ADD_EXERCISES = 'ADD_EXERCISES';
const UPDATE_NEW_BODY_PART_TEXT = 'UPDATE-NEW-BODY-PART-TEXT';
const ADD_BODY_PART = 'ADD-BODY-PART';

let store = {
    _state: {
        catalogPage: {
            bodyPart: [
                { id: 1, label: "Грудь" },
                { id: 2, label: "Ноги" }
            ],
            newBodyPartText: "",
            listExercises: [
                { id: 1, label: "Жим" },
                { id: 2, label: "Брусья" },
                { id: 3, label: "Отжимаия" }
            ],
            newExercisesText: ""
        },

        sidebar: [
            { id: "workaut", label: "Дневник тренировок" },
            { id: 'programs', label: "Программы тренировок" },
            { id: 'catalog', label: "Каталог упражнений" }
        ],

        diary: {
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
    },
    _callSubscriber() {
        console.log('hi');
    },
    getState() {

        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
  

    dispatch(action) {

        if (action.type === ADD_WEIGHT) {
            let text = this._state.diary.newWorkoutWeightText;
            this._state.diary.newWorkoutWeightText = '';
            this._state.diary.workoutWeight.push( { id: 2, weight: text},);
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_WEIGHT_TEXT) {
            this._state.diary.newWorkoutWeightText = action.text;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_EXERCISES_TEXT) {
            this._state.catalogPage.newExercisesText = action.text;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_EXERCISES) {
            let text = this._state.catalogPage.newExercisesText;
            this._state.catalogPage.newExercisesText = '';
            this._state.catalogPage.listExercises.push({ id: 5, label: text },);
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_BODY_PART_TEXT) {
            this._state.catalogPage.newBodyPartText = action.text;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_BODY_PART) {
            let text = this._state.catalogPage.newBodyPartText;
            this._state.catalogPage.newBodyPartText = '';
            this._state.catalogPage.bodyPart.push({ id: 3, label: text },);
            this._callSubscriber(this._state);
        }
    }
}
export const addWeightCreator = () => ({
    type: ADD_WEIGHT
})
export const updateNewWeightTextCreator = (text) => ({
    type: UPDATE_NEW_WEIGHT_TEXT, text: text
})
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

window.state = store;

export default store;