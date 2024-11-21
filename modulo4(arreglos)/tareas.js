var isCompleted = false;

function toggleTaskCompleted() {
	isCompleted = !isCompleted;
}

var tasks = [
    {
      description: 'estudiar por tu cuenta',
      isCompleted: false
    },
    {
      description: 'crear proyecto',
      isCompleted: false
    },
    {
      description: 'terminar los cursos bedu',
      isCompleted: false
    }
]

function toggleTaskCompleted(index) {
	tasks[index].isCompleted = !tasks[index].isCompleted;
}



toggleTaskCompleted(0);

toggleTaskCompleted(2);

console.log( tasks );

function deleteTask(index) {
	tasks.splice(index, 1);
}

deleteTask(1);

console.log( tasks );
