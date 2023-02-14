import React from 'react'

export default function Entry(props) {


  return (
    <><form className='container'>
    <div className="mb-1">
      <label htmlFor="exampleInputEmail1" className="form-label">Task Title</label>
      <input type="text" value={props.value} onChange={ props.TaskChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
      <input type="text" value={props.desc}  onChange={ props.descChange} className="form-control" id="exampleInputPassword1" required/>
      <button type="submit" onClick={props.adding} className="btn btn-success my-2" >Add</button>
    </div>

  </form></>
  )
}
