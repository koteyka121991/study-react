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
        diaryDate: [
            { id: 1, date: "29 суббота" }
        ],
        workoutWeight: [
            { id: 1,weight: 22}
        ]

    }
}


export let addWeight= (diaryWeight) => {

    let newWeight ={
        id:2,
        weight:diaryWeight
    };
    State.diary.workoutWeight.push(newWeight);
    rerenderEnterTree(State);
}

export default State;