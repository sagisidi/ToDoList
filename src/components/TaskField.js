
import React from 'react';


const TaskFormFields =() =>{

    return (

          <form className= "addTaskForm" >
            <span><label>Task Title:</label> <input type="text" placeholder="Task Title " name="Title" /></span>
            <span><label>Creator:</label><input type="text" placeholder="Creator.. " name="creator" /></span>
            <span><label>Operator:</label><input type="text" placeholder="Opertaor " name="operator" /></span>
            <input type="date" id="openDate" name="open"/>
            <input type="date" id="inProgressDate" name="progress"/>
            <input type="date" id="dueDate" name="due"/>
          </form>

    );
}
 
export default TaskFormFields;

