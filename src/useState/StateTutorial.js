import React, {useState} from 'react';

function StateTutorial() {
    /* **** Counter Example ****  */
    // const [counter, setCounter] = useState(0);
    // const increment = () => {
    //     setCounter(counter+1);
    //     console.log(counter);
    // }
    // return (
    //     <div>
    //         {counter}
    //         <button onClick={() => increment()}>Increment</button>
    //     </div>
    // )

     /* **** Input Example ****  */
     const [inputValue, setInputValue] = useState("Apoorva");
     const onChange = (event) => {
         setInputValue(event.target.value);
         console.log(inputValue);
     }

     return (
         <div>
             <input placeholder="Enter Something..." onChange={onChange} />
             {inputValue}
         </div>
     )
}

export default StateTutorial
