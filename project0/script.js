const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  //creating a new division element
  var y = document.createElement("DIV");
  y.className = classNames.TODO_ITEM;
  //creating another input element as type checkbox
  x = document.createElement("INPUT");
  x.setAttribute("type", "checkbox");
  x.className = classNames.TODO_CHECKBOX;
  //creating a function for onclick event
  x.onclick = function(){
    //if checkbox is checked
    if(this.checked===true){
      //decrement the unchecked count span
      uncheckedCountSpan.textContent = parseInt(uncheckedCountSpan.textContent, 10)-1;
    }
    else{
      //increment the unchecked count span
      uncheckedCountSpan.textContent = parseInt(uncheckedCountSpan.textContent, 10)+1;
    }
  };
  //append input element to the division element
  y.appendChild(x);

  //creating an input element for writing to do task
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.className = classNames.TODO_TEXT;
  x.value = "TODO";
  //append input element to the division element
  y.appendChild(x);

  //creating delete button
  var x = document.createElement("BUTTON");
  x.textContent = "Delete"
  x.className = classNames.TODO_DELETE;
  //adding onclick event function
  x.onclick = function(){
    //selecting the parent of the division
    const selector = this.parentNode.parentNode;
    //selecting the current division
    const parent = this.parentNode;

    //decrement the number of todos
    itemCountSpan.textContent = parseInt(itemCountSpan.textContent, 10) - 1;

    let checkbox = x.parentNode.getElementsByClassName("todo-checkbox")[0];
    console.log(checkbox);
    if(checkbox.checked === false){
      console.log(checkbox.checked);
      uncheckedCountSpan.textContent = parseInt(uncheckedCountSpan.textContent, 10)-1;
    }
    //removing current division element
    selector.removeChild(parent);

  };
  //append button to the division element
  y.appendChild(x);

  // append the division to the list element
  list.appendChild(y);
  //increment the number of todos
  incrementItemCount()
}



function incrementItemCount(){
    itemCountSpan.textContent = parseInt(itemCountSpan.textContent, 10)+1;
    uncheckedCountSpan.textContent = parseInt(uncheckedCountSpan.textContent, 10)+1;
}
