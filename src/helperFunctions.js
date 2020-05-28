import inProgressIcon from './styles/images/career.png';
import viIcon from './styles/images/correct.png';
import finishIcon from './styles/images/complete.png';


export const createrNewTask = (event) => {
    let data="";
    let bool = true;
    if (event.hasOwnProperty("key")){
        data = event.target.value;
        bool = event.key==="Enter";
    }
    else
      data = event;
    if(data.length>0 && bool) {
      
      const id= 5;
      const newTask = {
        id: id,
        taskname: data,
        creator:'',
        username: '',
        createDate:'',
        endDate:'',
        actualEndDate:'',
        email: '',
        notes:''
      };
      return newTask;
  
    }
    return [];

}


export const chooseIcon = (title) => {
    switch (title){
            case "TO DO":
                    return   inProgressIcon;
            case "IN PROGRESS":
                    return   viIcon ;
            default:
                    return finishIcon;

    }
}


export const removeTaskFromList = (list,task) => {

  return list.filter(item => (item.id !== task.payload.id || item.taskname !== task.payload.taskname));

}