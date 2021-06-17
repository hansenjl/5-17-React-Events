import {useState} from 'react'

function Counter(){
    const [time, setTime] = useState(0)
    const [currentState, functionToChangeState ] = useState("hi")
   
    function handleClick(){
        setTime(time+1) // pass in the new value
        setTime(time+1)
        setTime(t => t + 1) // passing in fn that returns new value
    }
    console.log(time)
    
    return(
        <div>
            <h1>{time}</h1>
            <button onClick={handleClick}>Click Me!</button>
        </div>
    )
}
export default Counter