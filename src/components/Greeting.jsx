import React,{useState} from 'react';

const Greeting=()=>{

    const flag=false;
    const [userName,setUsername]=useState("");
    return(
        <div>
            <h1>Enter you name:</h1>
            <input type="text" onChange={(e)=>{setUsername(e.target.value)}}/>

           {
             userName && <p>Hello {userName}!</p>
           }
            
        </div>
    )
}

export default Greeting;