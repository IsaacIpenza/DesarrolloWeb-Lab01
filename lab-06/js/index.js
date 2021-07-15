$(document).ready(function() {

    $(".agregar").on("click", function(e) {
        e.preventDefault();

        var newDiv = $("<div>");
        newDiv.attr("class", "lis");

        var li = $("<li>").text($("#newText").val());
        li.attr("class", "itemShop")
        
        var p = $("<p>");

        var buttonCheck = $("<button>").text("check");
        buttonCheck.attr("class", "checar");

        var buttonDelete = $("<button>").text("delete");
        buttonDelete.attr("class", "del");

        // p.append(li)
        p.append(buttonCheck);
        p.append(buttonDelete);

        newDiv.append(li);
        newDiv.append(p);
        

        $(".Lista").append(newDiv);
        
        $("#newText").val("");

    });
    
    $(".Lista").on("click", ".checar", function () {
        
        $(this).parent().parent().toggleClass("chec");
    })

    $(".Lista").on("click", ".del", function () {
        
        $(this).parent().parent().remove();
    })
   
});