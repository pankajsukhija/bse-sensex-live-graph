export const logInAction = () => {
    console.log("Running action logInAction")
    return {
        type : 'LogIN'
    }
}

export const logOutAction = () => {
    return {
        type : 'LogOUT'
    }
}

export const appendToGraphData = (value) => {
    return {
        type : "appendToGraphData",
        newAddedValue : value
    }
}