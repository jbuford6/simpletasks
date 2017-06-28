function createButton(context, func){
    var button = document.createElement("input");
    button.type = "button";
    button.value = "Click Me!";
    button.onclick = func;
    context.appendChild(button);
}

window.onload = function(){
    createButton(document.body, function(){
        alert("Hey!");
      ;
    });
};
function display_alert()
 {
 alert(textbox.value);
 }



    
  