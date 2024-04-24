
import axios from "axios";


import { deleteData, getData, saveData, updateData } from "./context.service";

//save
const project="http://localhost:4000/add-restarent/"

//get


//save
const projectUrl="http://localhost:4000/add-restarents/"

//delete

const restDeleteUrl="http://localhost:4000/delete-restarent/"

const getOneUser = "http://localhost:4000/restarents/"

//login

export function getLoginUserData(){
    const loginUrl ="http://localhost:4000/login/"
    return getData(loginUrl);
}

//login get




//get data
export function getUserData(){
    return getData();
}

//get data
export function getRestarentData(){
    const resturl ="http://localhost:4000/restarents/"
    return getData(resturl);
}

//save data

export function saveRestarentData(data){
    return saveData(projectUrl,data);
}

//delete 
export function deleteRestarentData(id){

    return deleteData(restDeleteUrl,id)
}

export function getOneUserData(id){
    return getData(getOneUser+id)

    
}

export function UpdateUserData(id,data){
    const updateOneUser=`http://localhost:4000/update-restarent/${id}`
    console.log(updateOneUser)
    return axios.put(updateOneUser,data)
}

