import {UserListActionTypes, UserListActionCreators} from "../actions/UserListActions";


const UserListReducer = function(preState = [],action){
    switch (action.type){
        case UserListActionTypes.LOAD_USER_LIST:
            return action.payload;
        case UserListActionTypes.ADD_USER_LIST:
            return [...preState, action.payload];
        case UserListActionTypes.DELETE_USER_LIST:
            return preState.filter(item=>item.id != action.payload.id);
        case UserListActionTypes.UPDATE_USER_LIST:
            let temp = preState.findIndex((item)=>{return item.id === action.payload.id});
            preState.splice(temp,1,action.payload);
            return [...preState];
        default:
            return preState; 
    }
}

export default UserListReducer;