import React, { useEffect } from 'react'
import  Create from './Create'
import { useState } from 'react'
import axios from 'axios';
import { BsCircleFill, BsFillTrashFill } from 'react-icons/bs';



function Home() {
    const [todos, setTodos] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/get')
        .then(result =>setTodos(result.data))
        .catch(err=> console.log(err))
    },[])
    const handleEdit =(id) =>{
        axios.put('http://localhost:3001/get'+id)
        .then(result =>console.log(result.data))
        .catch(err=> console.log(err))

    }

    return (
       
            <div className='home'>
            <form className="create_form"><div>
            <h2>To Do List</h2>
            <Create />
            {
                todos.length === 0 ?
                <div><h2>No record</h2></div> :
                todos.map(todo => (
                    <div className='task-class'>
                        <div className='checkbox' onClick={()=>handleEdit(todo._id)}>
                            <BsCircleFill className = 'icon'/>
                          <p>{todo.task}</p>   
                        </div>
                       <div>
                        <span><BsFillTrashFill className='icon'/></span>
                       </div>
                    </div>
                ))
            }
        </div></form></div>
            
    )
}

export default Home
