
export const getStudents = ()=>{
    return axios.request({
        url:"/students",
        method:"GET"
    });
};
export const getStudentsById = (studentId)=>{
    return axios.request({
        url:"/students/" + studentId ,
        method:"GET",
    });
};




export const createStudents = (data)=>{
    return axios.request({
        url:"/students",
        method:"POST",
        data
    });
};
export const updateStudents = (studentId , data)=>{
    return axios.request({
        url:"/students/" + studentId,
        method:"PUT",
       data
    });
};
export const deleteStudents = (studentId , data)=>{
    return axios.request({
        url:"/students/" + studentId ,
        method:"DELETE",
       data
    });
};

