import { all , fork} from 'redux-saga/effects';
import { createUser, deleteUser, getUser, updateUser } from './user';


export default function* rootSaga(){
    yield all([

        fork(createUser),
        fork(getUser),
        fork(updateUser),
        fork(deleteUser)
    ])
}