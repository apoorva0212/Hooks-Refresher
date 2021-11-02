import React, {useState, useEffect} from 'react';
import axios from 'axios';

function EffectTutorial() {
    const [data, setData] = useState("");
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((res) => {
                setData(res.data[0].email);
                console.log("API was called");
            })
            .catch( (err) => {
                console.log(err);
            })
    }, []);

   
    return (
        <div>
           Hello {data}
        </div>
    )
}

export default EffectTutorial;
 