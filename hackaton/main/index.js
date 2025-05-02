// index.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNWrzVXwsYlIv7DZyN5YKCgOD13jWGqWI",
    authDomain: "databasework-849cc.firebaseapp.com",
    databaseURL: "https://databasework-849cc-default-rtdb.firebaseio.com",
    projectId: "databasework-849cc",
    storageBucket: "databasework-849cc.appspot.com", // ✅ Corrected
    messagingSenderId: "601343373319",
    appId: "1:601343373319:web:79d0aa1ffc2e1fc5a77aa2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.addEventListener("DOMContentLoaded", function () {

    // Add Task function
    window.addTask = function (columnId) {
        const input = document.getElementById(columnId + "Input");
        const taskText = input.value.trim();

        if (taskText !== "") {
            const taskList = document.querySelector(`#${columnId} .task-list`);
            const task = createTaskElement(taskText);
            taskList.appendChild(task);
            input.value = "";
        } else {
            alert("Please enter a task!");
        }
    };

    // Create Task Element
    function createTaskElement(text) {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        taskDiv.innerHTML = `
            <p>${text}</p>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        `;
        return taskDiv;
    }

    // Delete Task
    window.deleteTask = function (button) {
        const task = button.parentElement;
        task.remove();
    };

    // Save tasks to Firebase
    document.getElementById("saveToFirebase").addEventListener("click", function () {
        const todoTasks = getTasksFromColumn("todo");
        const inProgressTasks = getTasksFromColumn("inProgress");
        const doneTasks = getTasksFromColumn("done");

        const taskData = {
            todo: todoTasks,
            inProgress: inProgressTasks,
            done: doneTasks
        };

        const timestamp = new Date().getTime();

        set(ref(db, "student data/" + timestamp), taskData)
            .then(() => {
                alert("Tasks saved successfully to Firebase!");
            })
            .catch((error) => {
                console.error("Error saving tasks:", error);
                alert("Error saving tasks.");
            });
    });

    // Helper to get tasks from a column
    function getTasksFromColumn(columnId) {
        const taskList = document.querySelector(`#${columnId} .task-list`);
        const tasks = taskList.querySelectorAll("p");
        return Array.from(tasks).map(task => task.textContent);
    }
});
