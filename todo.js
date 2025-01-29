let todolist = JSON.parse(localStorage.getItem('work')) || [];

listt();

function add_listItem() {
    let input = document.querySelector('.input-field');
    let input_value = input.value.trim();
    let date = document.querySelector('.duedate');
    let duedate = date.value.trim();

    if (input_value === '') {
        alert('Enter a task first.');
    } else {
        if (duedate === '') {
            alert('Set a duedate for your task.');
        } else {
            todolist.push({
                work: input_value,
                duedate
            });


            input.value = '';
            date.value = '';
        }
    }

    listt();

    setLocalStorage();

}

function listt() {
    let todohtml = '';

    todolist.forEach((e, i, array) => {
        todohtml +=
            `<div class='list-parent'>
            <div style= 'word-wrap: break-word;' class= 'input-js task-js'><i class="fa-solid fa-circle-dot bullet-icon"></i>${e.work}</div>
             <div class= 'input-js date-js'>${e.duedate}</div>
             <button class='delete-edit-button delete-button' onclick='deleteListItems(${i});' style=";margin-left: 30px;"><i class="fa-solid fa-trash"></i></button>
             <button class='delete-edit-button edit-button' onclick='editListItems(${i});'><i class="fa-solid fa-pencil"></i></button>
             </div>`;

    })


    document.querySelector('.list-items').innerHTML = todohtml;

}

function setLocalStorage() {
    localStorage.setItem('work', JSON.stringify(todolist));
}


function deleteListItems(i) {
    todolist.splice(i, 1);
    listt();
    setLocalStorage();
}

function editListItems(i) {
   
     let task = todolist[i].work;
     let dueDate = todolist[i].duedate;
 
     let newTask = prompt('Enter the new task', task); 
     let newDueDate = prompt('Enter the new due date', dueDate); 

     if (newTask && newDueDate) {
         todolist[i] = { work: newTask, duedate: newDueDate }; 
     } else {
         alert('Invalid input! Task not updated.');
     }
 
     listt();
     setLocalStorage();
}


