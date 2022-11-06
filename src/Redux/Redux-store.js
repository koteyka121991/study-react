import {combineReducers, legacy_createStore as createStore} from "redux";
import catalogReduser from './Catalog-reduser';
import diaryReduser from './Diary-reduser';
import sidebarReduser from "./Sidebar-reduser";

let redusers = combineReducers(
    {catalog:catalogReduser,
        diary:diaryReduser,
        sidebar:sidebarReduser
    }
);

let store = createStore(redusers);
 export default store;