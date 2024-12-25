import axios from "axios"

/* FOR SYSTEM */
// const ServerURL="http://10.0.2.2:5000"

/* FOR MOBILE */
// const ServerURL="http://192.168.29.36:5000"
//  const ServerURL="http://192.168.184.52:5000"
const ServerURL="http://192.168.4.152:5000"



const getData=async(url)=>{
    try{
var response=await axios.get(`${ServerURL}/${url}`/*,{headers:{Authorization:"Bearer "+localStorage.getItem("TOKEN")}}*/)
var result= response.data
return result

}
catch(e)
{
    return null
}
} 
const postData=async(url,body)=>{
    try{
var response=await axios.post(`${ServerURL}/${url}`,body/*,{headers:{Authorization:"Bearer "+localStorage.getItem("TOKEN")}}*/)
var result=await response.data
return result

}
catch(e)
{
    return null
}
}

export {ServerURL,getData,postData}