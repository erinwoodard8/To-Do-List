function newElement(){
    let li = document.createElement('li');
    let inputValue = document.getElementById("myInput").value;
    let list = document.getElementById("list");
    
    li.appendChild(document.createTextNode(inputValue));
        if (inputValue === '') {
        alert("You must write something!");
            } 
        else {
            list.appendChild(li);
            };

    // this is setting the input value for my text box back to blank
    document.getElementById("myInput").value = "";

  

    // creating check boxes
    let checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        li.appendChild(checkbox);
        checkbox.addEventListener('change', function(e){
            if(this.checked){
            e.currentTarget.parentNode.style.textDecoration = "line-through";
        }
            else {e.currentTarget.parentNode.style.textDecoration ="none"};
        
    
});


    // creating button to remove tasks
    let rmvButton = document.createElement("button");
    rmvButton.innerHTML = '<img src="trashcan.jpg">';
    li.appendChild(rmvButton);
    rmvButton.addEventListener('click', function(e) {
        e.currentTarget.parentNode.remove();
    })
    rmvButton.setAttribute("class", "removeButton");

}


// allows adding tasks to list by hitting enter.
document.getElementById("myInput").addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      newElement();
    }
  });


