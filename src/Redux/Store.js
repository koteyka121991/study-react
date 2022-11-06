import catalogReduser from "./Catalog-reduser";
import diaryReduser from "./Diary-reduser";



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
        this._state.catalogPage=catalogReduser(this._state.catalogPage, action);
        this._state.diary=diaryReduser(this._state.diary, action);
        this._callSubscriber(this._state);      
    }
}



window.state = store;

export default store;