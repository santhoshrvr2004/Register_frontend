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

const initalState = {
  loading: false,
  users: [],
  createResult: null,
  updateResult: null,
  deleteResult: null,
  errorMessage: null,
};

export const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case CREATE_USER:
    case GET_USER:
    case UPDATE_USER:
    case DELETE_USER:
      return { ...state, loading: true };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        createResult: action.payload.data,
        loading: false,
        errorMessage: false,
      };
    case CREATE_USER_ERROR:
      return {
        ...state,
        errorMessage: action.payload.message || action.payload.data,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        users: action.payload.data,
        errorMessage: false,
      };
    case GET_USER_ERROR:
      return {
        ...state,
        
      };

    case UPDATE_USER_SUCCESS:
      const userUpdate = state.users.map((user) =>
        user.id === action.payload.data.id ? action.payload.data : user,
      );
      return {
        ...state,
        users: userUpdate,
        errorMessage: false,
        loading: false,
      };

    case UPDATE_USER_ERROR:
      return {
        ...state,
        errorMessage: action.payload.message || action.payload.data,
      };

    case DELETE_USER_SUCCESS:
      const userDelete = state.users.filter(
        (user) => user.id !== action.payload.data.id,
      );
      return {
        ...state,
        users: userDelete,
        errorMessage: false,
      };
    case DELETE_USER_ERROR:
      return {
        ...state,
        errorMessage: action.payload.message || action.payload.data,
      };

    default:
      return state;
  }
};
