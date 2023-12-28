let text_inp=document.querySelector('#text-feild');
let date_inp=document.querySelector('#date-feild');
let tod_table=document.querySelector('#todo-table');

let todo={
  name:text_inp.value,
  date:date_inp.value
}

let todo_list=JSON.parse(localStorage.getItem('todo_list')) || [];

add_todos=()=>{
  todo.name=text_inp.value;
  todo.date=date_inp.value;
  if(todo.name===''){
    alert("need name");
    return;
  }
  todo_list.push(JSON.parse(JSON.stringify(todo)));
  console.log(todo_list);
  new_todo=todo_list[todo_list.length-1];
  localStorage.setItem('todo_list',JSON.stringify(todo_list))
  add_to_table(todo_list[todo_list.length-1],todo_list.length-1);
  text_inp.value='';
  date_inp.value='';
}

add_to_table=(todo,id)=>{
  let newHtml = `
      <div class= js-todo>
      <span class=js-todo-feilds>${todo.name}</span>
      <span class=js-todo-feilds>${todo.date}</span>
      <button class='btn-delete' onclick="delete_todo(${id})">Delete</button>
      </div>`
  tod_table.innerHTML+=newHtml;
}
delete_todo=(id)=>{
  todo_list.splice(id, 1);
  localStorage.setItem('todo_list',JSON.stringify(todo_list));
  display_All();
}

display_All= ()=>{
  tod_table.innerHTML='';
  todo_list.forEach(add_to_table);
}

display_All();