import Navbar from './Components/Navbar.js';
import './App.css';
import Entry from './Components/Entry.js';
import ToDoList from './Components/ToDoList.js';
import React,{useState} from 'react'
import Footer from './Components/Footer.js';

function App() {
const [task,setTask]=useState("");
const [desc,setDesc]=useState("");
const [data,setData] = useState([])
const taskChange = (e)=>{
setTask(e.target.value);
}
const descChange = (e)=>{
  setDesc(e.target.value);
  }

  const adding = (e)=>{
    e.preventDefault();
      if(!task || !desc){
        alert("Title and description cannot be blank")
      }else{
  setData([
    ...data,{id:(data.length)+1,heading:task,description:desc}
  ])
        }
      }
const deleteMe = (e)=>{
setData((data)=>data.filter((item)=>item.id != e.target.id))
}

  return (
 <>
<Navbar />
<Entry value={task} desc={desc} TaskChange = {taskChange} descChange={descChange}  adding={adding}/>

<hr className='my-4' style={{border:"2px solid green"}}/>
<ToDoList  data={data} removeMe={deleteMe}/>
<Footer/>
 </>
  );
}
export default App;
