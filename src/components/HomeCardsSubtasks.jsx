import React from 'react'

export const HomeCardsSubtasks = (props) => {
  

  const[status, setStatus]=React.useState(props.title.status)
const handleOnChange=()=>{
setStatus(prev=> !prev)
}
  return (
    <div><input type="checkbox" onChange={handleOnChange} checked={status}/>{props.title.subTaskTitle}</div>
  )
}
