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
    getState() {
     
        return this._state;
    },
    _callSubscriber() {
        console.log('hi');
    },
    addWeight() {
      
        let newWeight = {
            id: 2,
            weight: this._state.diary.newWeightText
        };
        this._state.diary.workoutDate.push(newWeight);
        this._state.diary.newWeightText = "";
        this._callSubscriber(this._state);
    },
    addReps(repsDate) {
        let newReps = {
            reps: repsDate
        };
        this._state.diary.workoutDate.push(newReps);
        this._callSubscriber(this._state);
    },
    updateNewWeightText(newText) {
        this._state.diary.newWeightText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

window.state = store;

export default store;