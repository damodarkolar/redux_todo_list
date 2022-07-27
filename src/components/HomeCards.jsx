import React from 'react'
import { HomeCardsSubtasks } from './HomeCardsSubtasks';

export const HomeCards = (props) => {
    const {title, tags, description, subTodoData}=props.data;
console.log(props)
  return (
    <div>
        <h2>{props.data.title}</h2>
        <h4>{tags.official ? "Official": tags.personal  ? "Personal" :  "others"}</h4>
        <p>{description}</p>
        <div>
            {subTodoData?.map(ele=><HomeCardsSubtasks title={ele.subTaskTitle} key={ele.id}/>)}
        </div>
    </div>
  )
}


