import{getStudents } from "./api.js"
import{renderTable } from "./view.js"
$(()=>{
    getStudents().then(({data})=>{
        renderTable(data)
    })
} )
