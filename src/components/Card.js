import React from 'react';

import '../styles/Cardlist.css'
import editIcon from '../styles/images/pencil.png';
import {chooseIcon} from '../helperFunctions';


const Card = ({tasks,title,action,addTask,onChangeTaskField,taskField}) => {
        const name = tasks.length>0?"show":"hide";
        const icon = chooseIcon (title);

        const listoftasks = tasks.map ( (task) =>{


                return (
                    <li key={task.id}>  
                        {title!=="DONE"?
                        <img src={icon} alt="viIcon" onClick={()=> {action(task)}}/>:
                        <img src={icon} alt="viIcon" />
                        }
                        <p> {task.taskname} </p> 
                        <img src={editIcon} alt="editIcon" /> 
                    </li>
                )
        });

        return (
                <div className={`card ${name}`} key={title}>
                    <h2> {title}</h2>
                    <ul>
                        {listoftasks}
                        <input type="text" placeholder="Add a task... " name="SearchBox" 
                        className="SearchBox" 
                        onChange = {onChangeTaskField}
                        onKeyPress ={addTask}
                        />
                    </ul>

                </div>


        );


}


export default Card;

