import { USERS_DATA } from "../../services/user";
import { call, put, takeEvery } from 'redux-saga/effects'
import { APPCONFIG } from '../../config/AppConfig'
import { CREATE_USER, CREATE_USER_ERROR, CREATE_USER_SUCCESS, DELETE_USER, DELETE_USER_ERROR, DELETE_USER_SUCCESS, GET_USER, GET_USER_ERROR, GET_USER_SUCCESS, UPDATE_USER, UPDATE_USER_ERROR, UPDATE_USER_SUCCESS } from "../../constants/ActionType";

function* createUserAsync(action) {
    try {
        const res = yield call(USERS_DATA.CREATE_USER,action.payload);
        console.log("res",res);
        
        const { status , data } = res;
        if(status === APPCONFIG.API_STATUS.SUCCESS){
            yield put({type:CREATE_USER_SUCCESS , payload: {status, data} });
        }else{
            yield put({type:CREATE_USER_ERROR, payload:{status,data}});
        }
    } catch (error) {
        yield put({type:CREATE_USER_ERROR});
    }
}

export function* createUser(){
    yield takeEvery(CREATE_USER , createUserAsync);
}

function* getUserAsync(action){
    try {
        const res = yield call(USERS_DATA.GET_USER,action.payload);
        console.log("Saga Res",res);
        
        const { status , data } = res;
        
        if(status === APPCONFIG.API_STATUS.SUCCESS){
            yield put({type:GET_USER_SUCCESS , payload:{ status, data}});
        }
        else{
            yield put({ type:GET_USER_ERROR , payload : { status, data}});
        }
    } catch (error) {
        yield put({ type:GET_USER_ERROR});
    }
}

export function* getUser(){
    yield takeEvery(GET_USER , getUserAsync);
}

function* updateUserAsync(action){
    try {
        const res = yield call(USERS_DATA.UPDATE_USER , action.payload);
        const { status , data} = res;
        if(status === APPCONFIG.API_STATUS.SUCCESS){
            yield put({type: UPDATE_USER_SUCCESS , payload:{ status , data}});
            yield put({ type: GET_USER });
        }
        else{
            yield put({ type: UPDATE_USER_ERROR , payload:{ status , data}});
        }
    } catch (error) {
        yield put({ type: UPDATE_USER_ERROR});
    }
}

export function* updateUser(){
    yield takeEvery(UPDATE_USER , updateUserAsync);
}

function* deleteUserAsync(action){
        try {
            const res = yield call(USERS_DATA.DELETE_USER , action.payload);
            const { status , data } = res;
            if(status === APPCONFIG.API_STATUS.SUCCESS){
                yield put({ type : DELETE_USER_SUCCESS , payload : { status , data}});
            }
            else{
                 yield put({ type : DELETE_USER_ERROR , payload : { status , data}});
            }
        } catch (error) {
             yield put({ type : DELETE_USER_ERROR });
        }
}

export function* deleteUser(){
    yield takeEvery(DELETE_USER, deleteUserAsync);
}