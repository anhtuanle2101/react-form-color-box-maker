import React, {useState} from "react";

const NewBoxForm = ({ addBox })=>{
    const INITAL_DATA = {
        color:"",
        width:"",
        height:""
    }
    const [formData, setFormData] = useState(INITAL_DATA);
    
    const handleOnSubmit = (e)=>{
        e.preventDefault();
        console.log(formData);
        addBox(formData);
        setFormData(INITAL_DATA);
    }

    const handleOnChange = (e)=>{
        const { name, value } = e.target;
        setFormData(box=>({...box,[name]:value}));
    }

    return( 
        <form onSubmit={handleOnSubmit}>
            <label htmlFor="color">Color</label>
            <input 
                type="text"
                id="color"
                name="color"
                placeholder="color"
                value={formData.color}
                onChange={handleOnChange}
            />
            <label htmlFor="width">Width</label>
            <input 
                type="number"
                id="width"
                name="width"
                placeholder="width"
                value={formData.width}
                onChange={handleOnChange}
            />
            <label htmlFor="height">Height</label>
            <input 
                type="text"
                id="height"
                name="height"
                placeholder="height"
                value={formData.height}
                onChange={handleOnChange}
            />
            <button>Add</button>
        </form>
    )
}

export default NewBoxForm;