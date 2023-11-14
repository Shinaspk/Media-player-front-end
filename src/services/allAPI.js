import commonAPI from "./commonAPI"
import { serverURL } from "./serverURL"



//api to upload video
 export const uploadAllVedios=async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/videos`,reqBody)
}

//Api to get all video

export const getAllVideos= async()=>{
    return await commonAPI('GET',`${serverURL}/videos`,"")
}

//Api to delete a video

export const deleteVideos= async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}
//addd watch history
export const addToHistory= async(videoDetails)=>{
    return await commonAPI('POST',`${serverURL}/history`,videoDetails)
}

//api to get  watch history
export const getAllHistory= async()=>{
    return await commonAPI('GET',`${serverURL}/history`,"")
}



//api to delete history
export const deleteHistory=async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}
//api to add category
export const addToCategory=async(body)=>{
    return await commonAPI('POST',`${serverURL}/category`,body)
}

//api to get all category
export const getAllCategory=async()=>{
    return await commonAPI('GET',`${serverURL}/category`,"")
}


//api to get a a video for drag
export const getAVideo=async(id)=>{
    return await commonAPI('GET',`${serverURL}/videos/${id}`,"")
}
//api call to update the category
export const updateCategory= async(id,body)=>{
    return await commonAPI('PUT',`${serverURL}/category/${id}`,body) 
}

//Api to delete a video from category

export const deletecategoryVideos= async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/category/allVideo.${id}`,[])
}