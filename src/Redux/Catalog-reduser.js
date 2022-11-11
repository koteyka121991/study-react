const UPDATE_NEW_EXERCISES_TEXT = 'UPDATE-NEW-EXERCISES-TEXT';
const ADD_EXERCISES = 'ADD_EXERCISES';
const UPDATE_NEW_BODY_PART_TEXT = 'UPDATE-NEW-BODY-PART-TEXT';
const ADD_BODY_PART = 'ADD-BODY-PART';
let initialState = {
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
}
const catalogReduser = (state=initialState, action) => {      

    switch (action.type) {
        case UPDATE_NEW_EXERCISES_TEXT:
            return {...state,
                newExercisesText: action.text    
            };            
            
        case ADD_EXERCISES:
            let textExercises = state.newExercisesText;
          return {...state,  
                newExercisesText: '',
                listExercises: [...state.listExercises, { id: 5, label: textExercises }]
            };            
           
        case UPDATE_NEW_BODY_PART_TEXT:
            return {...state,   
                newBodyPartText:action.text 
            };           
           
        case ADD_BODY_PART:
            let textBodyPart = state.newBodyPartText;
           return  {...state,
                newBodyPartText:'',    
                bodyPart: [...state.bodyPart,{ id: 3, label: textBodyPart }]
            };   
            
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