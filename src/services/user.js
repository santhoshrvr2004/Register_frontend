import { APICONFIG } from "../config/ApiConfig";
import axios from "axios";

const HOST = APICONFIG.DEP_HOST;
const USERS = APICONFIG.USERS;

const createUser = async(payload) => {
  try {
    const res = await axios.post(HOST + USERS.CREATE_USER,payload);
    console.log("Service Res",res.data);
    
    return res.data;
  } catch (error) {
    throw error;
  }
};

const getUser = async(payload) =>{
    try {
        const res = await axios.get(HOST+USERS.GET_USER,{params : payload} );
        console.log("service res",res.data);
        
        return res.data;
    } catch (error) {
        throw error; 
    }
}

const updateUser = async (payload) => {
  try {
    const { id, ...data } = payload;

    const res = await axios.put(
      `${HOST}${USERS.UPDATE_USER}/${id}`, // ✅ correct id
      data // ✅ send form data
    );

    return res;
  } catch (error) {
    throw error;
  }
};
const deleteUser = async(id) =>{
    try {
        const res = await axios.delete(`${HOST}${USERS.DELETE_USER}/${id}`,{
            data:{id}
        });
        return res;
    } catch (error) {
        throw error;
    }
}


export const USERS_DATA = {
        CREATE_USER : createUser,
        GET_USER : getUser,
        UPDATE_USER : updateUser,
        DELETE_USER : deleteUser
}