import { deleteStudents } from "./api.js";

/**
 * 
 * @param {any[]} students 
 */

export const renderTable = (students)=>{
  $tbody.html("");
 students.map(({id,name,brithday,email,phone}) => {
     let $tr = $(` <tr>
    <td>${name}</td>
    <td>${brithday}</td>
    <td>${email}</td>
    <td>${phone}</td>
    <td>
      <a href="/edit.html?id=${id}" class="text-info"
        ><i class="fa fa-edit"></i> Chỉnh sửa</a
      >
      |
      <a class="text-danger"  style="cursor:pointer ;"><i class="fa fa-trash-alt"></i> Xóa</a>
    </td>
  </tr>`)
  $tbody.append($tr)
  $tr.find(".text-danger").on("click", {id} , (e)=>{
    if(confirm(` Bạn có Muốn xóa em ${name} khum`)){
      deleteStudents(id).then(()=>{
        $tr.remove();
      })
    }
  } )
 });
};
const $name = $("#name")
const $brithday = $("#birthday")
const $email = $("#email")
const $phone = $("#phone") 
const $tbody = $("tbody")
export const fillEditForm=({name,brithday,email,phone})=>{
$name.val(name);
$brithday.val(brithday);
$email.val(email);
$phone.val(phone);
};