import {createStudents} from "./api.js"
const $form = $("form");
const $name = $("#name")
const $brithday = $("#birthday")
const $email = $("#email")
const $phone = $("#phone")
$form.on("submit",{},(e)=>{
  e.preventDefault();
  createStudents({
    name : $name.val(),
    brithday :$brithday.val(),
    email :  $email.val(),
    phone :$phone.val(),
  }).then(()=>{
    window.location.href = "/"
  });
});
