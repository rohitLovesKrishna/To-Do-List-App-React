import React from 'react'

export default function ToDoList(props) {

  return (
  <>
  <div className='allBox container'>
  {props.data.map((item)=>{

return(

  <div key={item.id} className='container to-do'>
<center><h1  className='heading'>{item.heading}</h1>
<hr style={{border:"1px solid crimson"}}/>
</center>
<p className='desc'>{item.description}</p>
<hr  style={{border:"1px solid crimson"}}/>
<button id={item.id}className='btn btn-success customBtn my-1' onClick={props.removeMe} >Delete</button>
  </div>
   ) })}
 </div>
  </>
  )
}