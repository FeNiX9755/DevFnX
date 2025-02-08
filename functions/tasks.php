<?php
// Database connection (as before)
$host = 'localhost';
$dbname = 'devfnx';
$user = 'root';
$password = '';
$con = mysqli_connect($host, $user, $password, $dbname);

if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

$_POST = json_decode(file_get_contents('php://input'), true);

// Load tasks (unchanged)
if (isset($_POST['loadTasks'])) {
    $getTasks = "SELECT * FROM todolist WHERE is_deleted = 0";
    $result = mysqli_query($con, $getTasks);
    $tasks = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($tasks);
}

// Update task
if (isset($_POST['updateTask'])) {
    $task_id = $_POST['task_id'];
    $task_description = $_POST['task_description'];
    $priority = $_POST['priority'];
    $category = $_POST['category'];
    $due_date = $_POST['due_date'];
    $reminder_time = $_POST['reminder_time']; // Expecting 'YYYY-MM-DDTHH:MM' format

    // Convert reminder_time to a MySQL-compatible timestamp if not empty
    if ($reminder_time) {
        $reminder_time = date('Y-m-d H:i:s', strtotime($reminder_time));
    } else {
        $reminder_time = null;
    }

    $updateTask = "UPDATE todolist 
        SET task_description = '$task_description', 
            priority = '$priority', 
            category = '$category', 
            due_date = '$due_date', 
            reminder_time = '$reminder_time' 
        WHERE record = $task_id
    ";
    if (mysqli_query($con, $updateTask)) {
        echo json_encode(['status' => 'success', 'message' => 'Task updated']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to update task']);
    }
}

// Complete task (mark as complete)
if (isset($_POST['completeTask'])) {
    $task_id = $_POST['task_id'];
    $updateStatus = "UPDATE todolist SET status = 1 WHERE record = $task_id";
    if (mysqli_query($con, $updateStatus)) {
        echo json_encode(['status' => 'success', 'message' => 'Task completed']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to update task']);
    }
}

// Delete task (mark as deleted)
if (isset($_POST['deleteTask'])) {
    $task_id = $_POST['task_id'];
    $deleteTask = "UPDATE todolist SET is_deleted = 1 WHERE record = $task_id";
    if (mysqli_query($con, $deleteTask)) {
        echo json_encode(['status' => 'success', 'message' => 'Task deleted']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to delete task']);
    }
}

// Add or update task logic (same as before)
