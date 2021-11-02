import React, { useState, useReducer} from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1,
                showText: state.showText
            }
        case "toggleShowText":
            return {
                count: state.count,
                showText: !state.showText
            }
        default: 
            return state
    }
};

function Reducer() {

    /* **** Scenario using useState **** */

    // const [count, setCount] = useState(0);
    // const [showText, setShowText] = useState(true);

    // return (
    //     <div>
    //         <h1>{count}</h1>
    //         <button onClick={() => {
    //             setCount(count + 1);
    //             setShowText(!showText);
    //         }}
    //         >
    //             Click Here
    //         </button>
    //         {showText && <p> This is a text </p>}
    //     </div>
    // )

    /* **** useReducer **** */
    const [state, dispatch] = useReducer(reducer, {count:0, showText: true}); 
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => {
                dispatch({type: "toggleShowText"});
                dispatch({type: "INCREMENT"});
            }}
            >
                Click Here
            </button>
            {state.showText && <p> This is a text </p>}
        </div>
    )
}

export default Reducer;
