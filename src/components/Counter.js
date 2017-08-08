import React  from "react";

const Counter = (props) => <div>
            Clicked: <span>{props.value}</span> times
            <button onClick={props.onAddOne}>+</button>
            <button onClick={props.onIncrement}>-</button>
            <button onClick={props.onAddOdd}>AddIfOdd</button>
</div>


export default Counter;