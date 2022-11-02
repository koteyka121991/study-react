import { rerenderEnterTree } from "../render";


let State = {
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
}
window.state=State;
export let addWeight = () => {
    let newWeight = {
        id: 2,
        weight: State.diary.newWeightText
    };
    State.diary.workoutDate.push(newWeight);
    State.diary.newWeightText="";
    rerenderEnterTree(State);
}
export let addReps = (repsDate) => {
    let newReps = {
        reps: repsDate
    };
    State.diary.workoutDate.push(newReps);
    rerenderEnterTree(State);
}
export let updateNewWeightText = (newText) => {
    State.diary.newWeightText = newText;
    rerenderEnterTree(State);
}


export default State;