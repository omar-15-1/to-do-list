let btn=document.getElementById('btn')
let main =document.getElementById('main')
let form =document.getElementById('container')
let clear =document.getElementById('clear')
btn.onclick=function call(x){
    x.preventDefault();

    if(main.value==""){
    alert('its empty')
    res.style.display='none'
}
let taskDiv =document.createElement('div')
taskDiv.className = 'res';
taskDiv.style.display = 'flex';
let checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.className = 'input';
let span = document.createElement('span');
span.textContent = main.value;
let trashIcon = document.createElement('i');
trashIcon.className = 'fa-solid fa-trash';
taskDiv.appendChild(checkbox);
taskDiv.appendChild(span);
taskDiv.appendChild(trashIcon);
form.appendChild(taskDiv)
trashIcon.onclick=function(){
    taskDiv.remove('div')
}
clear.onclick=function(){
let res = document.querySelectorAll('.res')
res.forEach(function (task) {
    task.remove(); // احذف كل عنصر
});
}
main.value=""
}
