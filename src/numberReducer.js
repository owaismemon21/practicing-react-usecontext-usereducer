const NumberReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            // do nothing
    }
}
  
export default NumberReducer;