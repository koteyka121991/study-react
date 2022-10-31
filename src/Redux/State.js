
let State = {
    catalogPage: {
        listCatalog: [
            {id: 1, label: "Грудь" },  
            {id: 2, label: "Ноги" }         
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
          
            diaryData: [
                {id: 1,  data:"29 суббота"}               
            ],
            workoutSet: [
                {weight:22, reps:2, approaches: 3}
            ]
    
        }
    }




export default State;