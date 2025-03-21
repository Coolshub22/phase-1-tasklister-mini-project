document.addEventListener("DOMContentLoaded", () => {
  // your code here
   
   const taskForm = document.getElementById("create-task-form");
   const taskLi = document.getElementById("tasks");
   const sortButton = document.getElementById("sort-btn");

   
   taskForm.addEventListener("submit", (e) => {
     e.preventDefault(); 
 
     
     const taskInput = document.getElementById("new-task-description");
     const prioritySelect = document.getElementById("priority-select");
     const dueDateInput = document.getElementById("due-date");
     
     const taskText = taskInput.value.trim();
     const priority = prioritySelect.value;
     const dueDate = dueDateInput.value;

 
     if (taskText === "") return; 
 
    
     const taskItem = document.createElement("li");
     taskItem.textContent = `<strong>${taskText}</strong> - Due: ${dueDate}`;

 if (priority === "high") {
            taskItem.style.color = "red";
        } else if (priority === "medium") {
            taskItem.style.color = "orange";
        } else {
            taskItem.style.color = "green";
        }
 
     
     const delButton = document.createElement("button");
     delButton.textContent = "X";
     delButton.style.marginLeft = "20px";
     delButton.style.borderRadius = "5px";
     delButton.style.backgroundColor = "Blue";
     delButton.addEventListener("click", () => taskItem.remove());
 
     const editButton = document.createElement("button");
     editButton.textContent = "Edit";
     editButton.style.marginLeft = "10px";
     editButton.style.borderRadius = "5px";
     editButton.style.backgroundColor = "green";
     editButton.addEventListener("click", () => {
         const newText = prompt("Edit your task:", taskText);
         if (newText !== null) {
             taskItem.innerHTML = `<strong>${newText}</strong> - Due: ${dueDate}`;
             taskItem.appendChild(delButton);
             taskItem.appendChild(editButton);
         }
     });
     
     taskItem.appendChild(delButton);
     taskItem.appendChild(editButton);
     taskLi.appendChild(taskItem);
     taskInput.value = "";
     dueDateInput.value = "";
   });

   sortButton.addEventListener("click", () => {
    let tasks = Array.from(taskLi.children);
    const priorityOrder = { "red": 1, "orange": 2, "green": 3 };

    tasks.sort((a, b) => {
        return priorityOrder[a.style.color] - priorityOrder[b.style.color];
    });

    taskLi.innerHTML = ""; 
    tasks.forEach(task => taskLi.appendChild(task)); 
});
 });
 
