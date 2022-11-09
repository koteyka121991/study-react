let initialState = {
    sidebar: [
        { id: "workaut", label: "Дневник тренировок" },
        { id: 'programs', label: "Программы тренировок" },
        { id: 'catalog', label: "Каталог упражнений" },
        { id: 'users', label: "Спортмены" } 
    ]   
}
const sidebarReduser =(state=initialState) => {
    return state; 
}
export default sidebarReduser;