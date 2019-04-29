import React from 'react';



export default function Todo(props){
  let classNames = "item";
  if (props.item.completed) {
    classNames += " completed";
  }

  function updateTodo(){
    props.toggle(props.item.id)
  }



return (
  <div className={classNames} onClick={updateTodo}>
    <p>{props.item.task}</p>
  </div>
);

}
