import React, { useState, useRef } from 'react';

function RefTutorial() {
    const [name, setName] = useState("Apoorva");
    const inputRef = useRef(null);
    const onClick = () => {
        setName(inputRef.current.value);
        inputRef.current.focus();
        inputRef.current.value = "";
    }

    return (
        <div>
            <h1>{name}</h1>
            <input type="text" placeholder="Example.." ref={inputRef} />
            <button onClick={onClick}>Change Name</button>
        </div>
    )
}

export default RefTutorial;
