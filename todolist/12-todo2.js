

const todoList=[]
renderAll()
function renderAll(){
    let todoListHTML=""
    todoList.forEach(function(todoObject,index){
        const {name,dueDate }= todoObject;
        const html=`
        <div>${name}</div>
        <div>${dueDate}</div> 
        <button onclick="
         todoList.splice(${index},1);
         renderAll();
        "class="delete-buttom"
        >delete</button>
        `
        todoListHTML +=html
         
    })
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
    inputElement.value="";
    dateElement.value=""
    console.log(todoList)
    renderAll()
}