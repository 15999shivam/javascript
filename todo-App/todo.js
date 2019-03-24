'use strict'
let todos = getSavedToods();

filters = {
    searchText:'',
    hideCompleted:false
}

document.querySelector('#searchTodo').addEventListener('input',(e)=>{
    filters.searchText = e.target.value;
    renderTdo(todos,filters);
})




renderTdo(todos,filters);

document.querySelector('#newTodo').addEventListener('submit',(e)=>{
    e.preventDefault();
    let todo = {
        id: uuidv4(),
        text: e.target.elements.toDo.value,
        completed: false
    }
    e.target.elements.toDo.value="";
    todos.push(todo);
    saveTodos(todos);
    
    renderTdo(todos,filters);
})

document.querySelector('#hideCompleted').addEventListener('change',(e)=>
{
    filters.hideCompleted = e.target.checked;
    renderTdo(todos,filters)
})

