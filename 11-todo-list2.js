

const todolist= [];

renderTodoList();
function renderTodoList(){
    let todolistHTML='';
    for(let i=0; i<todolist.length;i++){
        const todo = todolist[i];
        const html = `<p>${todo}</p>`;
        todolistHTML +=html;
    }
    console.log(todolistHTML)
    document.querySelector('.js-todo-list')
     .innerHTML= todolistHTML
}




function addTodo(){
    const inputElement= document.querySelector('.js-to-do-input')
    const name= inputElement.value
    //console.log(name)
    todolist.push(name)
    console.log(todolist) 
            
    inputElement.value=''  
    renderTodoList();
}

      