import {combineReducers, legacy_createStore as createStore} from "redux";
import catalogReduser from './Catalog-reduser';
import diaryReduser from './Diary-reduser';
import sidebarReduser from "./Sidebar-reduser";
import usersReduser from "./Users-reduser";
import workoutReduser from "./workout-reduser";

let redusers = combineReducers(
    {catalogPage:catalogReduser,
        diary:diaryReduser,
        sidebar:sidebarReduser,
        usersPage:usersReduser,
        workoutPage:workoutReduser
       
    }
);


let store = createStore(redusers);

 export default store;