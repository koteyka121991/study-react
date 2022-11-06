let initialState = {
    sidebar: [
        { id: "workaut", label: "Дневник тренировок" },
        { id: 'programs', label: "Программы тренировок" },
        { id: 'catalog', label: "Каталог упражнений" } ]   
}
const sidebarReduser =(state=initialState) => {
    return state; 
}
export default sidebarReduser;