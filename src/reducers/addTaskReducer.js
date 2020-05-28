import {tasks,inProgressTasks,completedTasks} from '../tasks';
import {removeTaskFromList} from '../helperFunctions'

const tasksState ={
    opentasks:tasks,
    inProgress:inProgressTasks,
    completed:completedTasks
}

const addTaskReducer = (state = tasksState,action ={}) =>{
    switch (action.type){
        case 'ADD_TO_DO_TASK':
            return Object.assign({},state,{opentasks:[action.payload,...state.opentasks]});
        case 'IN_PROGRESS':
            return Object.assign(
                {},
                state,
                {opentasks:removeTaskFromList(state.opentasks,action) , 
                inProgress:[action.payload,...state.inProgress]
                });
        case 'END_TASK':
            return Object.assign(
                {},
                state,
                {inProgress:removeTaskFromList(state.inProgress,action) ,
                completed:[action.payload,...state.completed ]
                });
        default:
            return state;
    }
}

export default addTaskReducer;