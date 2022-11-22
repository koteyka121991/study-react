import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import authReduser from "./auth-reduser";
import catalogReduser from './Catalog-reduser';
import diaryReduser from './Diary-reduser';
import profileReduser from "./profile-reduser";
import sidebarReduser from "./Sidebar-reduser";
import usersReduser from "./Users-reduser";
import workoutReduser from "./workout-reduser";
import { reducer as formReducer } from 'redux-form'

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

// applyMiddleware принимает промежуточные слои
// npm i redux-thunk middleware для Redux
let store = createStore(redusers, applyMiddleware(thunkMiddleware));

 export default store;