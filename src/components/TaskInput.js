import React from 'react';
import '../styles/taskInput.css';
import searchIcon from '../styles/images/maps-and-flags.png';

const TaskInput= ({addTask, onChangeTaskField,taskField}) => {

        return (
            <div className="searchDiv">
            
                <input type="text" placeholder="Add a task... " name="SearchBox" 
                className="SearchBox" 
                onChange = {onChangeTaskField}
                onKeyPress ={addTask}
                />

                 <img src={searchIcon} alt="searchIcon" onClick={()=> {addTask(taskField)}}/>
                 
            </div>


        );

}


export default TaskInput;