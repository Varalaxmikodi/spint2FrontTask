import axios from "axios";


//save -->post
export function saveData(url,data){
    return axios.post(url,data)
    }
//get call
export function getData(url){
    return axios.get(url);
}

//update -->put/patch
export function updateData(url,data){
    return axios.put(url+data.id,data)
}
//delete -->delete
export function deleteData(url,data){
    return axios.delete(url+data)
}