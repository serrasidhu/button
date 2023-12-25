"use client"
import { useState } from "react"
export default function Button () {
    const studentName: string | any[]=["Sara","Warda","Ayesha","Aamara","Shama","Serra","Esra","Gul"]
    const [index,setIndex]=useState(0)
    const nextHandler=()=>{
        setIndex((index+1)%studentName.length);
    }
    const previousHandler =()=>{
        setIndex((index - 1)% studentName.length);
    }
    return(
        <>
        <button onClick={nextHandler} className="inline-block bg-blue-400 rounded-ful px-8 py-1 text-sm font font-semiblod text-red-700 mr-2">Next</button><br/>
        <span><strong>{studentName[index]}</strong></span><br/>
        <button onClick={previousHandler} className="inline-block bg-blue-400 rounded-ful px-8 py-1 text-sm font font-semiblod text-red-700 mr-2">Previous</button><br/>

        </>
    )
 
}