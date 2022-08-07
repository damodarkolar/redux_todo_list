import React from 'react'
import { HomeCardsSubtasks } from './HomeCardsSubtasks';

export const HomeCards = (props) => {
    const {title, tags, description, subTodoData, id}=props.data;
  return (
    <div key={id} style={{border:"2px solid red",  width:"200px"}}>
        <h2>{props.data.title}</h2>
        <h4>{tags.official ? "Official": tags.personal  ? "Personal" :  "others"}</h4>
        <p>{description}</p>
        <div>
            {subTodoData?.map(ele=><HomeCardsSubtasks title={ele} key={ele.id}/>)}
        </div>
    </div>
  )
}


