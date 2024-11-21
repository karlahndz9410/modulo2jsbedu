var tasks = [];

function addTask(tasks, description, isCompleted = false) {
  var newTasks = [].concat(tasks);

  newTasks.push({
    description: description,
    isCompleted: isCompleted
  });

  return newTasks;
}

tasks = addTask(tasks, 'Some task to do');

console.log(tasks[0]);