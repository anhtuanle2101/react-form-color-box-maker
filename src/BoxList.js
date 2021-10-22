import React, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = ()=>{
    const INITAL_STATE = []
    const [boxes, setBoxes] = useState(INITAL_STATE);
    const addBox = (item)=>{
        let newBox = item;
        setBoxes(boxes=>[...boxes, newBox]);
    }
    return(
        <div className="BoxList"> 
            {boxes.map(box=><Box color={box.color} width={box.width} height={box.height} />)}
            <NewBoxForm addBox={addBox} />
        </div>
    )
}

export default BoxList;