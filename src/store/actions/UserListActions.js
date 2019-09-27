import axios from "axios";

export const UserListActionTypes = {
    LOAD_USER_LIST:"LOAD_USER_LIST",
    ADD_USER_LIST:"ADD_USER_LIST",
    DELETE_USER_LIST:"DELETE_USER_LIST",
    UPDATE_USER_LIST:"UPDATE_USER_LIST"
}

export const UserListActionCreators = {
    LoadUserListAction(payload){
        return {
            type: UserListActionTypes.LOAD_USER_LIST,
            payload
        }
    },
    AddUserListAction(payload){
        return {
            type: UserListActionTypes.ADD_USER_LIST,
            payload
        }
    },
    DeleteUserListAction(payload){
        return {
            type: UserListActionTypes.DELETE_USER_LIST,
            payload
        }
    },
    UpdateUserListAction(payload){
        return {
            type: UserListActionTypes.UPDATE_USER_LIST,
            payload
        }
    },
    LoadUserListAsyn(payload){
        return (dispatch, getState)=>{
            return axios.get("http://localhost:59999/users")
            .then(res=>{
                dispatch(this.LoadUserListAction(res.data));
            })
        }
    },
    EditUserListAsyn(payload){
        return (dispatch, getState)=>{
            return axios.put("http://localhost:59999/users/"+payload.id, payload)
            .then(res=>{
                dispatch(this.UpdateUserListAction(payload));
            })
        }
    },
    AddUserListAsyn(payload){
        //console.log("action", payload)
        return (dispatch, getState)=>{
            return axios.post("http://localhost:59999/users", payload)
            .then(res=>{
                dispatch(this.AddUserListAction(payload));
            })
        }
    },
    DeleteUserListAsyn(payload){
        //console.log("action", payload)
        return (dispatch, getState)=>{
            return axios.delete("http://localhost:59999/users/"+payload.id)
            .then(res=>{
                dispatch(this.DeleteUserListAction(payload));
            })
        }
    },
}