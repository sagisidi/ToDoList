import {createrNewTask} from '../helperFunctions';

export const changeToDoTaskFieldAction = (text)=>({
  type:'CHANGE_TODO_TASK_FIELD',
  payload:text

})

export const changeInProgressTaskFieldAction = (text)=>({
  type:'CHANGE_INPROGRESS_TASK_FIELD',
  payload:text

})

export const changeCompletedTaskFieldAction = (text)=>({
  type:'CHANGE_COMPLETED_TASK_FIELD',
  payload:text

})



export const addToDoTaskAction =(event,actionType) => {
    const task = createrNewTask(event);
    return task.hasOwnProperty("id") ?
      {
          type:'ADD_TO_DO_TASK',
          payload:task
      }:
      {
      type:'NO_ACTION',
      payload:task
      }


}



export const addInProgressTask =(event,actionType) => {
  const task = createrNewTask(event);
  return task.hasOwnProperty("id") ?
    {
        type:'IN_PROGRESS',
        payload:task
    }:
    {
    type:'NO_ACTION',
    payload:task
    }


}


export const addCompletedTask =(event,actionType) => {
  const task = createrNewTask(event);
  return task.hasOwnProperty("id") ?
    {
        type:'END_TASK',
        payload:task
    }:
    {
    type:'NO_ACTION',
    payload:task
    }


}


export const inProgressAction =(task) => {
  return {
    type:'IN_PROGRESS',
    payload:task
  }

}

export const endTaskAction =(task) => ({
  type:'END_TASK',
  payload:task
})




