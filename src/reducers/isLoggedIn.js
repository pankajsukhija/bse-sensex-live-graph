const isLoggedInReducer = (state = false, action) => {
    switch (action.type) {
        case "LogIN":
            return state = true
        case "LogOUT":
            return state = false
        default:
            return state
    }
}

export default isLoggedInReducer;