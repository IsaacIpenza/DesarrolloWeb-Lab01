
$("#ButtonPost").on("click", function(e){
    e.preventDefault();

    var list = $("#todoList");
    var div = $("<div>"); 
    var checkbox = $("<input type ='Checkbox' name=toDo>")
    var label = $("<label>");

    label.text($("#todoText").val());

    div.append(checkbox);
    div.append(label);

    list.append(div);

    $("#todoText").val("");
});

$("#ButtonClear").on("click", function(e){
    var todos = $("[name='toDo']");

    for (let i = 0; i < todos.length; i++) {
        todos[i].checked= false;
    }
});

$("#ButtonMark").on("click", function(e){
    var todos = $("[name='toDo']");

    for (let i = 0; i < todos.length; i++) {
        todos[i].checked= true;
    }
});

$("#ButtonDelete").on("click", function(e){
    var todos = $("[name='toDo']");

    for (let i = todos.length - 1; i >= 0; i--) {

        if(todos[i].checked){
            todos[i].parentNode.remove();
        }
    }
});