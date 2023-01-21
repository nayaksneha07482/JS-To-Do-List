/*const todoList = [];
   /*myTodo = {
       id:
       task : "",
       completed : "false"

   },*/

//function made to add tasks 
function displayTask(){
    let text = document.getElementById("display").value;
    let newStat= document.getElementById("stat");
    const newItem = document.createElement("li");

  // delete button is created
    var delBtn = document.createElement( "i");
    delBtn.classList.add("far", "fa-trash-alt");
 // task done button is created 
    var doneBtn = document.createElement("i");
    doneBtn.classList.add("fa-solid", "fa-clipboard-check");
    
    
    
    
   newItem.innerHTML =  `<span class="todo-list">my task ${text}</span>`;
    /*newItem.innerHTML = `
        <span>${text}<button name="deleteButton" ><i class="far fa-trash"></i></button><button name="checkButton"><i class="fa-solid fa-clipboard-check"></i></button></span>
        
        <button name="deleteButton" ><i class="far fa-trash"></i></button>
    `;*/
    // both the buttons are added in li
    newItem.appendChild(doneBtn);
    newItem.appendChild(delBtn);
    
     // li is appeneded in ul
    
    newStat.appendChild(newItem);

    // to clear the input text after clicking submit
   document.getElementById("display").value="";

  // delete function is looped in all the del buttons
 var current_tasks = document.querySelectorAll(".far");
  
for(var j=0; j<current_tasks.length; j++){
        current_tasks[j].onclick = function(){
            this.parentNode.remove()}};
    

 var editTask = document.querySelectorAll(".fa-solid",".fa-clipboard-check");
           
          
                
    for (var k=0; k<editTask.length; k++){
    editTask[k].onclick  = function(){

    this.parentNode.style.textDecoration = "line-through";
}
            
           
   };
};


/*var current_tasks = document.querySelectorAll(".far");
for(var j=0; j<current_tasks.length; j++){
    current_tasks[j].onclick = function(){
        this.parentNode.remove()}};
    

    
    
   



    //document.getElementById("btn").addEventListener("click",displayTask);
   /* `
        <span class="todo-item">${todo}</span>
        <button name="checkButton"><i class="fas fa-check-square"></i></button>
        <button name="deleteButton" ><i class="fas fa-trash"></i></button>
    `;*/