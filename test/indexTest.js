// The code below ensures that students who are using CodeGrade will get credit
// for the code-along in Canvas; you can disregard it.

require("./helpers.js");

describe("", () => {
  describe("", () => {
    it("Test passing", () => {
      return true;
    });
  });

});
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const taskInput = document.getElementById("new-task-description");
    const taskDescription = taskInput.value;

    if (taskDescription.trim() !== "") {
      
      addTaskToList(taskDescription);
      
      
      taskInput.value = "";
    }
  });
});function addTaskToList(description) {
  const taskList = document.getElementById("task-list");
  const listItem = document.createElement("li");
  listItem.textContent = description;
  taskList.appendChild(listItem);
}
function addTaskToList(description) {
  const taskList = document.getElementById("task-list");
  const listItem = document.createElement("li");
  listItem.textContent = description;
  
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";
  deleteButton.addEventListener("click", function() {
    taskList.removeChild(listItem);
  });

  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);
}

