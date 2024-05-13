

const todolist= [{
    name:'what',
    dueDate:'2024-12-22'},
    {
      name:'how',
      dueDate:'2024-12-22'}];

renderTodoList();
function renderTodoList(){
    let todolistHTML='';
    for(let i=0; i<todolist.length;i++){
        const todoObject = todolist[i];
        //const name = todoObject.name;
        //const date = todoObject.dueDate;
        const { name, dueDate }=todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
            todolist.splice(${i}, 1);
            renderTodoList();
            "class="delete-button">delete</button>
        `;
        todolistHTML +=html;
    }
    console.log(todolistHTML)
    document.querySelector('.js-todo-list')
     .innerHTML= todolistHTML
}




function addTodo(){
    const inputElement= document.querySelector('.js-to-do-input')
    const name= inputElement.value
    const dateInputElement=document.querySelector('.js-due-date-input')
    const dueDate = dateInputElement.value
    //console.log(name)
    todolist.push({
        //name: name,
        //dueDate: dueDate
        name,
        dueDate
    });
    console.log(todolist) 
            
    inputElement.value=''  
    renderTodoList();
}

      