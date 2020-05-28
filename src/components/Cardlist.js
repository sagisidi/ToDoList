import React from 'react';
import Card from './Card';
import '../styles/Cardlist.css'

const Cardlist = (props) => {
    return (
            <div className="Cardlist">
                <Card title={"Open Tasks"} tasks={props.opentasks} endTask={props.endTask} name={props.openClassName}/>
                <Card title={"Completed Tasks"} tasks={props.completedTasks} endTask={props.endTask} name={props.completedClassName}/>
            </div>


    );



};



export default Cardlist;