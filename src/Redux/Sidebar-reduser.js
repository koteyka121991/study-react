let initialState = {
    sidebar: [
        { id: "workaut", label: "Дневник тренировок" },
        { id: 'programs', label: "Программы тренировок" },
        { id: 'catalog', label: "Каталог упражнений" },
        { id: 'users', label: "Спортмены" } ,
        { id: 'workouttest', label: "Дненик тренировок" } 
    ]   
}
const sidebarReduser =(state=initialState) => {
    return state; 
}
export default sidebarReduser;