import React from "react";

const Box = ({color, width, height})=>{
    return (
        <div 
            className="Box"
            style={{height:`${height}px`, width:`${width}px`, backgroundColor:color}}
        >
        </div>
    )
}

export default  Box;