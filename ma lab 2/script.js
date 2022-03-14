let TodosElements = [];

const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const List = document.getElementById('todo-list')
const ItemCountSpan = document.getElementById('item-count')
const UncheckedCountSpan = document.getElementById('unchecked-count')
 /*Add Logic for creating a new Todo Item. */

function renderTodo(Todo) {
   const Element = document.createElement('li');
   let TodoChecked = '';
   
   if (Todo.checked) TodoChecked = 'checked';
   
   Element.innerHTML = `
      <input type="checkbox" onChange="toggleTodo(` + Todo.id + `)" ` + TodoChecked + `>
      <button onClick="deleteTodo(` + Todo.id + `)">delete</button>
      <span>` + Todo.text + `</span>  
   `;

   return Element;
}

function render() {
   List.innerHTML = '';
   TodosElements.map(renderTodo).forEach(Todo => List.appendChild(Todo));
   
   ItemCountSpan.innerHTML = TodosElements.length;
   UncheckedCountSpan.innerHTML = TodosElements.filter(Todo => Todo.checked === false).length;
   
   return false;
}

function addTodo(Name) {
   const AddTodo = {
      id: TodosElements.length + 1,
      text: Name,
      checked: false
   }
   
   TodosElements.push(AddTodo);
   
   return render();
}

function removeTodo(nId) {
   TodosElements = TodosElements.filter(Todo => Todo.id !== nId);
   
   return render();
}

function toggleTodo(nId) {
   let ToggleTodo = TodosElements.filter(Todo => Todo.id === nId)[0];
   ToggleTodo.checked = !ToggleTodo.checked;
   
   return render();
}


/*Below lines can be used to updated the data on frontend */
function newTodo() {
   const Text = prompt("Enter Todo Item: ");
   
   addTodo(Text);
}
/*Below lines can be used to delete the data on frontend */

function deleteTodo(nId) {
   removeTodo(nId);
}