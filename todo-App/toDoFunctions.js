'use strict'
//fetch saved todos

const getSavedToods = ()=>
{
    const todosJSON = localStorage.getItem('todos');

    try{
        return (todosJSON)? JSON.parse(todosJSON): []

    }
    catch(e)
    {
        return [];
    }


}

//toggle status value
const toggleStatusValue = (id)=>
{
    todoIndex = todos.findIndex((todo)=>todo.id ==id)

    if(todoIndex>-1)
    {
        todos[todoIndex].completed = !todos[todoIndex].completed;
    }
}

//save todos to local storage
const saveTodos = (todos)=>
{
    localStorage.setItem('todos',JSON.stringify(todos));
}

//remove to do
const removeTodo = (id)=>
{

    const todoIndex = todos.findIndex((todo)=>
    todo.id === id)

    if(todoIndex>-1)
    {
        todos.splice(todoIndex,1)
    }
}

//render application todos based on filters
renderTdo = (todos,filters)=>
{
    filteredTodo = todos.filter((todo)=>
    {
        if(filters.hideCompleted)
        {
            return (todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && (todo.completed === !filters.hideCompleted))
        }
        else{
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        }
      
    })

    document.querySelector('#todos').innerHTML ='';

    const incompleteTodos = filteredTodo.filter((todo)=>
    !todo.completed)
    
    const summary = generateSumaryDOM(incompleteTodos);
    let body = document.querySelector('#todos');
    body.appendChild(summary);

    filteredTodo.forEach((todo)=>
    {
       const p = generateTodoDOM(todo);
        document.querySelector('#todos').appendChild(p);
    })
}

//get the Dom element for Individual Todo
const generateTodoDOM = (todo)=>
{
    const rootDiv = document.createElement('div');
    checkBox = document.createElement('input');
   button = document.createElement('button');
   const todoText = document.createElement('span');
    //setting up check attribute
    checkBox.setAttribute('type','checkbox');
        checkBox.checked = todo.completed;
        checkBox.addEventListener('change',(e)=>
        {
            toggleStatusValue(todo.id);
            saveTodos(todos);
            renderTdo(todos,filters);
        })
    rootDiv.appendChild(checkBox)

    //setting todo text element
    todoText.textContent = todo.text;
    rootDiv.appendChild(todoText);

    //setting up delete todo button
    button.textContent = 'x';
    button.addEventListener('click',(e)=>{
        removeTodo(todo.id);
        saveTodos(todos);
        renderTdo(todos,filters);
    })
    rootDiv.appendChild(button);


    return rootDiv;
}

//get DOM elements for list Summary
const generateSumaryDOM = (incompleteTodos)=>
{
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left.`;
    return summary;
}