'use client'
import { useEffect, useState } from "react"

const TimerDisplay = () =>{
    const [time,setTime]=useState('')
    
    useEffect(()=>{
     const interval=   setInterval(()=>{
            setTime((new Date(Date.now())).toString())
        },2000)
        return ()=>clearInterval(interval)
    },[])
   
    
    return <h1 className="text-xl font-semibold mb-4 text-center">{time}</h1>
}
export default TimerDisplay