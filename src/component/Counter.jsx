import React, { useEffect, useState } from 'react'

const Counter = () => {
    const[count , setCount]=useState(0)

useEffect(()=>{
    const timer=setInterval(() => {
        console.log("print afeter every 2 seconds")
    }, 2000);



    console.log("count update")
          
     return ()=>{
            clearInterval(timer)
            console.log('*****clear****')
        }


},[])



  return (
    <div>
    <h2>COUNT:{count}</h2>
    <button onClick={()=>setCount(count+1)}>increament</button>
    </div>
  )
}

export default Counter