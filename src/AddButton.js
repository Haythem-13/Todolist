import {useState} from "react";

const AddButton=({addTasks})=>{
  const[theText,setThetext]=useState('');
  // const [tasks,setTasks]= useState([]);

  const textChange=(e)=>{
    
    setThetext(e.target.value);  
  }
      //  setTasks([...tasks, newTask]);
      //  setThetext('');

      const handleCLick=(e)=>{
        e.preventDefault()
        if (!theText)
        {alert('Please write your next to do task ')
         return }
        addTasks(theText)
        setThetext('')
      
      }
    return(
    <div className="submit">
    <input type="text" value={theText} placeholder='Your next TODO task'onChange={textChange}/>
    <button className="add-btn" onClick={handleCLick}>Add</button>
    {/* <AddList tasks={tasks}/>  */}
      </div>

    )
        
    
    
} 
export default AddButton;

