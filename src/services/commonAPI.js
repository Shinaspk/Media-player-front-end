import axios from "axios"


const commonAPI=async(httpmethod,url,reqBody)=>{
    let reqConfig={
        
            method: httpmethod,
            url,                 //since both key and value are same we can writte like this 
            data: reqBody,
            Headers:{
                "content-type":"application/json"
            }
}
return await axios(reqConfig).then((result)=>{
    return result})

.catch((err)=>{
    return err
})
}
export default commonAPI