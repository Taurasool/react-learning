import { useState } from "react";

function InputShow(){
    const[text, setText] = useState("");
    return(
        <>
        <input value = {text} onChange={(e)=> setText(e.target.value)}>
        </input>
        <h2>{text}</h2>
        
        </>
    )
}

export default InputShow;

