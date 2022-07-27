import { combineReducers, legacy_createStore as createStore } from "redux";
import { authReducer } from "./authRedux/authReducer";
import { todosReducer } from "./todoRedux/todoReducer";
 const rootReducer= combineReducers({
    auth: authReducer,
    todos:todosReducer
 }) 





 export const store =createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__  && window.__REDUX_DEVTOOLS_EXTENSION__());

