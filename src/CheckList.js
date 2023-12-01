

const CheckList=({task,onToggle,onDelete,onEdit})=>{
    
const HandleDoneTask=()=>{
    onToggle(task.id)
    console.log(task.text);
}

const HandleDeletedTask=()=>{
    onDelete(task.id)
    console.log(task.id);
}
const HandleEdit=()=>{
    onEdit(task.id)
}


    return(
        <div className="check-box">
            <input type="checkbox" className="check" onChange={HandleDoneTask}/>
            <button className='remove' onClick={HandleDeletedTask}>❌</button>
            <button className='edit' onClick={HandleEdit}>✍️</button>
            
        </div>
    )
}
export  default CheckList ;