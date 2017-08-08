const Counter = (state=0, action) => {
    console.log(state)
    switch(action.type) {
        case "ADD_ONE":
            return state + 1;
        case "ADD_ODD":
            return state % 2 === 1 ? state + 1 : state;
        case "INCREMENT":
            return state -1;
        default:
            return state;
    }
}

export default Counter;