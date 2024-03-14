import React, {useEffect, useState} from 'react'



 export default function UseEffectEx() {
    const [count, setCount] = useState(0);
    const [Text, setText] = useState("Default text")


    useEffect(() => {
        
        // alert("count is increased by " + count);
        setText("Now Count is clicked and value of count is  " + count );
        
    }, [count]);

    const handleOnClick = () => {
        setCount(count + 1);
    };
    return (

        <div>
            <p>{Text}</p>
            <button onClick={handleOnClick}>Submit</button>
        </div>
    )
  
}


