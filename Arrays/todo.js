todos = [{
    text:'Order cat food',
    completed: true
},{
    text:'Clean Kitchen',
    completed: false
},{
    text:'Buy Food',
    completed: true
},{
    text:'Do Work',
    completed: false
},{
    text:'Exercise',
    completed: true
}]


sortTodo = function(todos)
{
    todos.sort(function(a,b){
        if(a.completed === true && b.completed === false)
        {
            return 1;
        }
        else
        if(a.completed === false && b.completed === true)
        {
            return -1;
        }
        else{
            return 0;
        }
    })
}

sortTodo(todos);
console.log(todos);

// deleteTodo = function(todos,task)
// {
//   const index =   todos.findIndex(function(todo)
//     {
//         return todo.text.toLowerCase() === task.toLowerCase();
//     })
//     if(index!=-1)
//     {
//         todos.splice(index,1);
//     }
// }

// filterTodo = function(todos,query)
// {
//     return todos.filter(function(todo,index){
//         return todo.completed === query;
//     })
// }

// console.log(filterTodo(todos,false));

// deleteTodo(todos,'buy food');
// console.log(todos);

// //create an array with five to do

// //you ahve x to use xis length

// //print all items   

// // const toDo = ["Complete JAvascript Tutorial","complete javascrip[t data structures and algorithms","10 pushups per day","30 min running each day","bring some snakes from jhansla"];

// const todo = 
// //delete the third item
// //add new item to end
// //remove first iterm from the list

// toDo.splice(2,1);
// toDo.push("remmember you are a beast");
// toDo.shift();

// console.log(`You have ${toDo.length} tasks to Do.`)
// // for(let i=0;i<toDo.length;i++)
// // {
// //     console.log(`ToDO: ${toDo[i]}`);
// // }

// toDo.forEach(function(item,index){
//     console.log(`${index+1}. ${item}`);
// });


// console.log(toDo);