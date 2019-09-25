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
}