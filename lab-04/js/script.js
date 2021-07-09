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

    // var currentListHTML = list.innerHTML;
    // list.innerHTML = currentListHTML + `<input type = "checkbox" name="todo" /> ${to_do} <br>`;


    var div = document.createElement("div");
    var checkbox = document.createElement("input");
    var label = document.createElement("label");

    checkbox.type = "checkbox";
    checkbox.name = "todo";
    label.textContent = to_do;
    
    div.appendChild(checkbox);
    div.appendChild(label);
    list.appendChild(div);

    document.getElementById("todoText").value = "";
    to_do ="";
}

function TodoClear(e){
    var todos = document.getElementsByName("todo");
    // console.log(todos);

    todos.forEach(element => {
        element.checked = false;
    })
}

function TodoMark(e){
    var todos = document.getElementsByName("todo");
    // console.log(todos);

    todos.forEach(element => {
        element.checked = true;
    })
}

function TodoDel(e){
    // var list = document.getElementsById("todoList");
    // list.innerHTML = "";

    var todos = document.getElementsByName("todo");

    for (let i = todos.length - 1; i >= 0; i--) {

        if(todos[i].checked){
            todos[i].parentNode.remove();
        }
    }

}