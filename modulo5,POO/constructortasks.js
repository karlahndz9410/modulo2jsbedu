var tasks = [];

var Task = function(description, isCompleted) {
    this.description = description;
    this.isCompleted = isCompleted;
  }
  
  Task.prototype.toggleCompleted = function() {
    this.isCompleted = !this.isCompleted;
  }

  function addTask(description, isCompleted = false) {
    tasks.push(new Task(description, isCompleted));
  }
  
  addTask('Some task to do');
  
  console.log(tasks[0]);  // { description: 'Some...', isCompleted: false }
  
  tasks[0].toggleCompleted();
  
  console.log(tasks[0]);  // { description: 'Some...', isCompleted: true }
  
   console.log(tasks[0]); // { description: 'Some...', isCompleted: true }
