//const todoList=[]//before localstorage
//for local storage dont forget to assign empty array to localstorage else null error is thrown
let storedTodoList = JSON.parse(localStorage.getItem('todoList')) || [];
const todoList=storedTodoList;
renderAll()
function renderAll(){
    let todoListHTML=""
    for(i=0;i<todoList.length;i++){
        const todoObject =todoList[i];
        const {name,dueDate }= todoObject;
        //onst dueDate = todoObject.dueDate
        const html=`
        <div>${name}</div>
        <div>${dueDate}</div> 
        <button onclick="
         todoList.splice(${i},1);
         localStorage.setItem('todoList',JSON.stringify(todoList));
         renderAll();
        "class="delete-buttom"
        >delete</button>
        `
        todoListHTML +=html
    }
    document.querySelector(".js-todo-list").innerHTML=todoListHTML
    
}
function handlelistener(event){
    if (event.key==="Enter"){
        addTodo();
    }}



function addTodo(){
    const inputElement=document.querySelector(".js-input-name")
    const name=inputElement.value

    const dateElement = document.querySelector(".js-due-date")
    const dueDate=dateElement.value
    if(name ===""|| dueDate===""){
        alert("Please enter both field")
        return;
    }
    todoList.push({name,dueDate})
    localStorage.setItem('todoList',JSON.stringify(todoList));
    inputElement.value="";
    dateElement.value=""
    console.log(todoList)
    renderAll()
}