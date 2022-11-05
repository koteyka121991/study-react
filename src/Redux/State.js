const ADD_WEIGHT = 'ADD-WEIGHT';
const UPDATE_NEW_WEIGHT_TEXT = 'UPDATE-NEW-WEIGHT-TEXT';
let store = {
    _state: {
        catalogPage: {
            listCatalog: [
                { id: 1, label: "Грудь" },
                { id: 2, label: "Ноги" }
            ],
            listExercises: [
                { label: "Жим" },
                { label: "Брусья" },
                { label: "Отжимаия" }
            ]
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
            workoutDate: [
                { id: 1, weight: 22, reps: 3 }
            ],
            newWeightText: "hello word",
            workoutApproaches: [
                { id: 1, approaches: 3 }
            ]

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

    addReps(repsDate) {
        let newReps = {
            reps: repsDate
        };
        this._state.diary.workoutDate.push(newReps);
        this._callSubscriber(this._state);
    },

    dispatch(action) {

        if (action.type === ' ADD-WEIGHT') {
            let newWeight = {
                id: 2,
                weight: this._state.diary.newWeightText
            };
            this._state.diary.workoutDate.push(newWeight);
            this._state.diary.newWeightText = "";
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-WEIGHT-TEXT') {
            this._state.diary.newWeightText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}
export const addWeightActonCreator = () => ({  
        type: ADD_WEIGHT    
})
export const updateNewWeightTextActonCreator = (text) => ({    
        type: UPDATE_NEW_WEIGHT_TEXT, newText: text    
})

window.state = store;

export default store;