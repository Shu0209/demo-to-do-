import { useState } from "react"

function ToDo(){

const [tasks,setTasks]=useState(["eat breakast","Take a shower","take dog to walk"])

const[newTask,setNewTask]=useState("")

    const handleInputChange=(e)=>{
     setNewTask(e.target.value)
    }

function addTask(){
    if(newTask.trim()!=""){
        setTasks(t=>[...t,newTask])
    setNewTask(" ")
    }
}

function deleteTask(index){
const updatedTask=tasks.filter((_,i)=>i!=index)
setTasks(updatedTask)
}
  
function moveTaskUp(index){
    if(index>0){
    const updatedTask=[...tasks];
    [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]];
    setTasks(updatedTask)
    }
}

function moveTaskDown(index){
    if(index<tasks.length-1){
        const updatedTask=[...tasks];
    [updatedTask[index],updatedTask[index+1]]=[updatedTask[index+1],updatedTask[index]];
    setTasks(updatedTask)

    }
}

    return(
        <>
        <div className=" p-2 m-2">
            <div className="text-center">
            <h1 className="text-3xl font-bold text-white p-2 m-2">To-Do List</h1>
            <input onChange={handleInputChange} type="text" value={newTask} placeholder="Enter Task" className="border-2 border-black p-2 m-2"/>
            <br />
            <button className="bg-green-800 text-white p-1 m-1 rounded-sm w-36" onClick={addTask}>Add Task</button>
            </div>
            <div className="p-2 m-2">
                <ol>
                    {tasks.map((task,index)=>
                    <li className=" p-2 m-2 bg-white rounded-2xl" key={index}>
                        <span className="font-bold text-xl flex-1">
                        {task}</span>
                        
                        <button className="bg-red-600 p-1 m-1 ml-8 rounded-lg text-white  font-bold" onClick={()=>deleteTask(index)}>Delete</button>
                        <button className="p-1 m-1 bg-blue-400 rounded-full" onClick={()=>moveTaskUp(index)}>☝️</button>
                        <button onClick={()=>moveTaskDown(index)} className="p-1 m-1 bg-blue-400 rounded-full">👇</button>
                        
                        
                        </li>
                    )}
                    
                </ol>
            </div>
        </div>
        </>
    )
}
export default ToDo