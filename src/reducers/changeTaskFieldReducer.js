const initialState = {
    toDoTaskField:'',
    inProgressTaskField:'',
    completedTaskField:''

}


const changeTaskFieldReducer = (state = initialState,action ={}) =>{
    switch (action.type){
        case 'CHANGE_TODO_TASK_FIELD':
            return Object.assign({},state,{toDoTaskField:action.payload});
        case 'CHANGE_INPROGRESS_TASK_FIELD':
            return Object.assign({},state,{inProgressTaskField:action.payload});
        case 'CHANGE_COMPLETED_TASK_FIELD':
            return Object.assign({},state,{completedTaskField:action.payload});
        default:
            return state;
    }
}

export default changeTaskFieldReducer;