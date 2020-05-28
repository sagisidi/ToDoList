import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './components/Header';
import Card from './components/Card';

import {changeToDoTaskFieldAction,changeInProgressTaskFieldAction,changeCompletedTaskFieldAction,
  addToDoTaskAction,addInProgressTask,addCompletedTask,endTaskAction,inProgressAction} from './actions/action';

import './styles/App.css';

const mapStateToProps = (state) =>{
  return {
    toDoTaskField: state.changeTaskFieldReducer.toDoTaskField,
    inProgressTaskField: state.changeTaskFieldReducer.inProgressTaskField,
    completedTaskField: state.changeTaskFieldReducer.completedTaskField,
    opentasks: state.addTaskReducer.opentasks,
    inProgress: state.addTaskReducer.inProgress,
    completed: state.addTaskReducer.completed,

  }
}

const mapDispatchToProps = (dispatch) => {
  
    return {
      changeToDoTaskField: (event) => dispatch(changeToDoTaskFieldAction(event.target.value)),
      changeInprogressTaskField: (event) => dispatch(changeInProgressTaskFieldAction(event.target.value)),
      changeCompletedTaskField: (event) => dispatch(changeCompletedTaskFieldAction(event.target.value)),
      addToDoTask: (event) => dispatch(addToDoTaskAction(event)),
      addInProgressTask: (event) => dispatch(addInProgressTask(event)),
      addCompletedTask: (event) => dispatch(addCompletedTask(event)),
      moveActionToInProgress: (event) =>  dispatch(inProgressAction(event)),
      moveActionToEndTasks: (event) =>  dispatch(endTaskAction(event))
    }
}

class App extends Component {

ActiveTask

  render() {
    const {opentasks,completed,inProgress,addToDoTask,addInProgressTask,addCompletedTask,moveActionToInProgress,moveActionToEndTasks,
          changeToDoTaskField,changeInprogressTaskField,changeCompletedTaskField,toDoTaskField,inProgressTaskField,completedTaskField} = this.props;
        return (
        <div className="App">
          <Header />
          <div className="Cardlist">
                <Card title={"TO DO"} tasks={opentasks} action={moveActionToInProgress} onChangeTaskField = {changeToDoTaskField}  addTask={addToDoTask} taskField={toDoTaskField} />
                <Card title={"IN PROGRESS"} tasks={inProgress} action={moveActionToEndTasks} onChangeTaskField = {changeInprogressTaskField} addTask={addInProgressTask} taskField={inProgressTaskField}/>
                <Card title={"DONE"} tasks={completed} onChangeTaskField = {changeCompletedTaskField} addTask={addCompletedTask} taskField={completedTaskField}/>
            </div>
          
        </div>
      );
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (App);
