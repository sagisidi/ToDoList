
import React from 'react';
import Modal from 'react-modal';
import '../styles/AddTask.css'
import '../styles/taskInput.css';

import cancelIcon from '../styles/images/cancel.png';
import searchIcon from '../styles/images/maps-and-flags.png';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    transform             : 'translate(-50%, -50%)',
    width                 : '50%',
    heigth                : 'auto'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')
 
function AddTask({addTask, onChangeTaskField,taskField}){
  const [modalIsOpen,setIsOpen] =  React.useState(false);
  const [formVisiability,setFormVisiability] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
    setFormVisiability(false);
  }

  function changeFormVisibility (){
    formVisiability? setFormVisiability(false): setFormVisiability(true);
  }
 
    return (
      <div>
        <button className="addTask" onClick={openModal}> Add Task </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <img src={cancelIcon} alt="viIcon" onClick={closeModal}/>
        <h2 >Add New Task</h2>          
          <div className="searchDiv">
            
            <input type="text" placeholder="Add a task... " name="SearchBox" 
            className="SearchBox" 
            onChange = {onChangeTaskField}
            onKeyPress ={addTask}
            />

             <img src={searchIcon} alt="searchIcon" onClick={()=> {addTask(taskField)}}/>
             
            </div>
                <div className="arrow-wrapper" onClick={changeFormVisibility}>
                    <div className={formVisiability?"arrow-horizontal rotate":"arrow-horizontal"}> </div>
                    <p>ADVANCED </p>       
                </div>
         
            
        {formVisiability? (

        
          <form className= "addTaskForm" >
            <span><label>Task Title:</label> <input type="text" placeholder="Task Title " name="Title" /></span>
            <span className="description"><label>Description:</label><textarea id="w3mission" rows="4" cols="50"></textarea></span>
            <span><label>Creator:</label><input type="text" placeholder="Creator.. " name="creator" /></span>
            <span><label>Operator:</label><input type="text" placeholder="Opertaor " name="operator" /></span>
            <input type="date" id="openDate" name="open"/>
            <input type="date" id="inProgressDate" name="progress"/>
            <input type="date" id="dueDate" name="due"/>
          </form>
          )
          :
          (<div></div>)
        }
        </Modal>
      </div>
    );
}
 
export default AddTask;

