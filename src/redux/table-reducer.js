import { tableApi } from "../api/api";

const SET_USERS = 'tableReducer/SET_USERS'

let initialState = {
    users: []
}

const tableReducer = (state = initialState, action) => {

    switch(action.type) {

        case SET_USERS:
            return {
                ...state,
                users: action.users.map(u => {
                    u.street = u.address.street
                    return u
                })
            }

        default:
            return state;
    }
}

const setUsers = (users) => ({type: SET_USERS, users});


export const getUsers = () => {
    return async (dispatch) => {
        const res = await tableApi.getUsers()
        dispatch(setUsers(res))
    }
}


export default tableReducer;