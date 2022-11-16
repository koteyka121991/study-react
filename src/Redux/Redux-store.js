import {combineReducers, legacy_createStore as createStore} from "redux";
import authReduser from "./auth-reduser";
import catalogReduser from './Catalog-reduser';
import diaryReduser from './Diary-reduser';
import profileReduser from "./profile-reduser";
import sidebarReduser from "./Sidebar-reduser";
import usersReduser from "./Users-reduser";
import workoutReduser from "./workout-reduser";

let redusers = combineReducers(
    {catalogPage:catalogReduser,
        diary:diaryReduser,
        sidebar:sidebarReduser,
        usersPage:usersReduser,
        workoutPage:workoutReduser,
        profilePage: profileReduser,
        auth:authReduser
       
    }
);


let store = createStore(redusers);

 export default store;