const DATA_WORKOUT = 'DATA_WORKOUT';

let initialState = {
    dates: [
        { id: 1, text: "Тренировка не записана", date: "31 сб" },
        { id: 2, text: "Тренировка не записана", date: "30 пят" },
        { id: 3, text: "Тренировка не записана", date: "29 чет" },
        { id: 4, text: "Тренировка не записана",  date: "28 пят" },
    ],   
}
const workoutReduser = (state = initialState, action) => {

    switch (action.type) {
        case DATA_WORKOUT:
            return  {...state,                 
                dates: [...state.dates,{ id: 5, text: "Тренировка не записана", date: "31 сб" }]
            };   
       
        default:
            return state;
    }
}
export const dataWorkout = () => ({
    type: DATA_WORKOUT
})
export default workoutReduser;