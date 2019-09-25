import {UserListActionTypes, UserListActionCreators} from "../actions/UserListActions";

const UserListReducer = function(preState = [],action){
    switch (action.type){
        case UserListActionTypes.LOAD_USER_LIST:
            return action.payload;
        case UserListActionTypes.ADD_USER_LIST:
            return [...action.payload, action.payload];
        case UserListActionTypes.DELETE_USER_LIST:
            return preState.filter(item=>item.id != action.payload.id);
        //     let index = preState.findIndex((item)=>{item.id != action.payload.id});
        //     preState.splice(index,1);
        //     return preState;
        //     //return preState.filter((item)=>{item.id != action.payload.id});
        default:
            return preState; 
    }
}

export default UserListReducer;