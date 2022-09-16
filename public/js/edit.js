import { getStudentsById, updateStudents } from "./api.js";
import { fillEditForm } from "./view.js";

$(function(){
 const $form = $("form")
 console.log($form)
 const $name = $("#name")
const $brithday = $("#birthday")
const $email = $("#email")
const $phone = $("#phone") 
 const url = new URL(location.href)
  const studentId = url.searchParams.get("id");

  getStudentsById(studentId).then(({data}) => {
    fillEditForm(data);

    $form.on('submit' , {} ,(e)=>{
      e.preventDefault();
       updateStudents(studentId,{
        name : $name.val(),
        brithday :$brithday.val(),
        email :  $email.val(),
        phone :$phone.val(),
      }).then(()=>{
        location.href = "/"
      });
    });
  });
});