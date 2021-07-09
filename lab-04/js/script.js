var post = document.getElementById("ButtonPost");
var clear = document.getElementById("ButtonClear");
var mark = document.getElementById("ButtonMark");
var del = document.getElementById("ButtonDelete");

post.addEventListener("click",TodoPost);
clear.addEventListener("click",TodoClear);
mark.addEventListener("click",TodoMark);
del.addEventListener("click",TodoDel);

function TodoPost(e){
    e.preventDefault();

    var to_do = document.getElementById("todoText").value;
    var list = document.getElementById("todoList");

    var currentListHTML = list.innerHTML;
    list.innerHTML = currentListHTML + `<input type = "checkbox" name="todo" /> ${to_do} <br>`;

    document.getElementById("todoText").value = "";
    to_do ="";
}

function TodoClear(e){

}

function TodoMark(e){

}

function TodoDel(e){

}