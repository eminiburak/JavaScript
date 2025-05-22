document.addEventListener("DOMContentLoaded", () => {
  const currentDateEl = document.getElementById("currentDate");
  const today = new Date();
  currentDateEl.textContent = `Today's date is ${today.toDateString()}`;
});

class Task {
  constructor(description, time, date) {
    this.description = description;
    this.time = time;
    this.date = date;
  }

  formatTimeTo12Hour() {
    const [hourStr, minute] = this.time.split(":");
    let hour = parseInt(hourStr);
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    return `${hour}:${minute} ${ampm}`;
  }

  isToday() {
    const today = new Date().toISOString().split("T")[0];
    return this.date === today;
  }

  render() {
    const li = document.createElement("li");
    li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

    if (this.isToday()) {
      li.classList.add("highlight-current-date");
    }

    const taskText = document.createElement("span");
    taskText.textContent = `${this.date} at ${this.time} - ${this.description}`;

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("btn", "btn-danger", "btn-sm");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => li.remove();

    li.appendChild(taskText);
    li.appendChild(removeBtn);

    return li;
  }
}

class TaskManager {
  constructor(listElementId) {
    this.taskList = document.getElementById(listElementId);
  }

  addTask(description, time, date) {
    const task = new Task(description, time, date);
    const taskElement = task.render();
    this.taskList.appendChild(taskElement);
  }
}


const taskManager = new TaskManager("taskList");


function addTask() {
  const description = document.getElementById("taskDescription").value.trim();
  const time = document.getElementById("taskTime").value;
  const date = document.getElementById("taskDate").value;

  if (!description || !time || !date) {
    alert("Please fill in all fields.");
    return;
  }

  taskManager.addTask(description, time, date);

  document.getElementById("taskDescription").value = "";
  document.getElementById("taskTime").value = "";
  document.getElementById("taskDate").value = "";
}
