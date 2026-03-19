import {
  CREATE_USER,
  CREATE_USER_ERROR,
  CREATE_USER_SUCCESS,
  DELETE_USER,
  DELETE_USER_ERROR,
  DELETE_USER_SUCCESS,
  GET_USER,
  GET_USER_ERROR,
  GET_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_ERROR,
  UPDATE_USER_SUCCESS,
} from "../../constants/ActionType";


export const createUser = (payload) =>({
    type:   CREATE_USER , payload
});

export const createUserSuccess = (payload) =>({
    type:   CREATE_USER_SUCCESS , payload
})

export const createUserError = (payload) =>({
    type:   CREATE_USER_ERROR , payload
});

export const getUser = (payload)=>({
    type:GET_USER , payload
})
export const getUserSuccess = (payload)=>({
    type:GET_USER_SUCCESS , payload
})
export const getUserError = (payload)=>({
    type:GET_USER_ERROR , payload
})
export const updateUser = (payload)=>({
    type:UPDATE_USER , payload
})
export const updateUserSuccess = (payload)=>({
    type:UPDATE_USER_SUCCESS , payload
})
export const updateUserError = (payload)=>({
    type:UPDATE_USER_ERROR , payload
});

export const deleteUser = (payload)=>({
    type:DELETE_USER , payload
})
export const deleteUserSuccess = (payload)=>({
    type:DELETE_USER_SUCCESS , payload
})
export const deleteUserError = (payload)=>({
    type:DELETE_USER_ERROR , payload
})