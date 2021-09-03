let addBtn= document.getElementById('addBtn');
let taskInput = document.getElementById('taskInput');
let noTasks = document.getElementById('noTasks');
let allTasks =document.getElementById('allTasks');


  let noTasksShow =()=>{
      if(allTasks.childElementCount>0){
          noTasks.classList.add('none')
      }else{
          noTasks.classList.remove('none')
      }
  }  


let addTask = ()=> {
    let taskData = taskInput.value
    if(taskData.trim() == ""){
        alert ("you must enter valid data")
    }
        else{
            noTasks.classList.add('none');
           allTasks.innerHTML += `
           <div class="alert alert-info"> 
           ${taskData} 
           <i class="float-right delete fas fa-trash" color:brown style="font-size: 35px;"></i>
           </div> `;
           taskInput.value= '';
            
            
        }
        
}
addBtn.addEventListener('click',addTask);

if(allTasks.children.length == 0){
    noTasks.classList.remove('none');
} 



document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
     noTasksShow();
   
    

    
    
    
})
