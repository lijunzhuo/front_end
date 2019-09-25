import UserListReducers from "./UserListReducers";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    UserList: UserListReducers
});

export default rootReducer;