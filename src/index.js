document.addEventListener("DOMContentLoaded", () => {
  // your code here
   
   const taskForm = document.getElementById("create-task-form");
   const taskLi = document.getElementById("tasks");
 
   
   taskForm.addEventListener("submit", (e) => {
     e.preventDefault(); 
 
     
     const taskInput = document.getElementById("new-task-description");
     const taskText = taskInput.value.trim();
 
     if (taskText === "") return; 
 
    
     const taskItem = document.createElement("li");
     taskItem.textContent = taskText;
 
     
     const delButton = document.createElement("button");
     delButton.textContent = "X";
     delButton.style.marginLeft = "20px";
     delButton.style.borderRadius = "5px";
     delButton.style.backgroundColor = "Blue";
     delButton.addEventListener("click", () => taskItem.remove());
 
     
     taskItem.appendChild(delButton);
     taskLi.appendChild(taskItem);
     taskInput.value = "";
   });
 });
 
