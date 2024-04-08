
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText === "") return; 
  
    var taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.push({ text: taskText, completed: false });
    localStorage.setItem("tasks", JSON.stringify(taskList));
  
    displayTasks();
    taskInput.value = ""; 
  
  function displayTasks() {
    var taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    var taskListElement = document.getElementById("taskList");
    taskListElement.innerHTML = ""; 
  
    taskList.forEach(function(task, index) {
      var taskItem = document.createElement("li");
      taskItem.textContent = task.text;
      if (task.completed) {
        taskItem.style.textDecoration = "line-through"; 
      }

      var completeButton = document.createElement("button");
      completeButton.textContent = "Concluir";
      completeButton.onclick = function() {
        toggleTaskCompletion(index);
      };
  
      var removeButton = document.createElement("button");
      removeButton.textContent = "Remover";
      removeButton.onclick = function() {
        removeTask(index);
      };
  
      taskItem.appendChild(completeButton);
      taskItem.appendChild(removeButton);
      taskListElement.appendChild(taskItem);
    });
  }
  
  function toggleTaskCompletion(index) {
    var taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList[index].completed = !taskList[index].completed;
    localStorage.setItem("tasks", JSON.stringify(taskList));
    displayTasks();
  }
  
  function removeTask(index) {
    var taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    displayTasks();
  }
  
  window.onload = displayTasks;
  