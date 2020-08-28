

function addToDo(){
    var li = $("#new-task").val();
    var todo={
        text:li,
        user:"Gabe"
    }
    if(li===""){
        alert("You need to type some letters or something!");
    }else{
        displayToDo(todo.text);
        $("#new-task").val("");
    }
    $("#txt-task").focus();
}

function completeToDo(){
    
}



function displayToDo(todo){
    $("#incomplete-tasks").append(`<li id="todo-li">${todo}<input type="checkbox" class="check"></li>`);
}

$(document).ready(function(){
    $("#check").click(function(){
        var $this = $(this);
        if(this.checked) {
            $this.parent().addClass('completed');
        }else{
            $this.parent().removeClass('completed');
        }
    });
});

function init(){
    $("#btn-add").click(addToDo);
    $("#txt-task").keypress(function(e){
        if(e.key==="Enter"){
            addToDo();
        }
    });
}

window.onload=init;