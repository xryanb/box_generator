import React, { useState } from  'react';

const ColorForm = (props) => {
    // These are state variables, they always go to the top of the component!
    const [boxGen, setBoxGen] = useState([]);
    const [textColor, setTextColor] = useState("");
    const [boxSize,setBoxSize]=useState();

    const createBox = (e) => {
        // add, prevent default behavior first thing.
        e.preventDefault();
        // write logic below
        const newBoxGen = [...boxGen]
        console.log(newBoxGen)
        newBoxGen.push(textColor)
        setBoxGen(newBoxGen)
        setTextColor('');
    };

    return(
        <div>
        <form onSubmit={ createBox }>
            <div>
                <label>Color: </label>
                <input type='color' value={textColor} onChange={ (e) => setTextColor(e.target.value) }  placeholder=""/>
            </div>
            <div>
                <label>Change width/height: </label>
                <input value={boxSize} onChange={ (e) => setBoxSize(e.target.value) }  placeholder=""/>
            </div>
            <input type="submit" value="Add" />
            <div>
            </div>
        </form>
        
        {
            boxGen.map( (item, index) => {
                return <div key = {index} style = {{backgroundColor: item, height: 100, width: 100, margin:15, display:"inline-flex"}} >
                </div>
            })
        }
        </div>
    );
};

export default ColorForm;