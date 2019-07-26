const graphData = {
    labels: [],

    datasets: [{
        fill: false,
        pointRadius : 3,
        borderWidth : 3,
        // steppedLine : true,
        label: 'Sensex Live',

        data: [],
    }]
}

// Note to Myself.
// A reducer must have a check for action type, otherwise it will be called by all actions every time.
const graphDataReducer = (state = graphData, action) => {
    // let newState = state
    // let timestamp = Date.now().toString()
    // newState.labels.push(timestamp)
    // newState.datasets[0].data.push({x : parseInt(timestamp), y : action.newAddedValue})
    // return newState
    // Above is Wrong, https://redux.js.org/troubleshooting#never-mutate-reducer-arguments XXXXXXXXXX

    if (action.type === 'appendToGraphData'){ // Now I know why it is required :P
        let timestamp = Date.now().toString()
        if (state.labels.length > 80){
            // Now it's working :)
            // Thanks to https://www.freecodecamp.org/forum/t/redux-remove-item-from-array/210837/2
            console.log('graphDataReducer : greater than 5 ')
            // Remove first object when lenght is greater than `x`
            return {
            // https://www.freecodecamp.org/forum/t/redux-remove-an-item-from-an-array-challenge-help/203038/5
                labels: [...state.labels.filter((elem, idx) => {
                    return idx !== 0
                }), timestamp],
                // Very inefficent - Complexity = `n`
                datasets: [{
                    fill: false,
                    pointRadius : 3,
                    borderWidth : 3,
                    // steppedLine : true,
                    label: 'Sensex Live',
                    
                    data: [...state.datasets[0].data.filter((elem, idx) => {
                        return idx !== 0
                    }), {x : parseInt(timestamp), y : action.newAddedValue}],
                }]
            }
        }

        return {
            
            labels: [...state.labels, timestamp],
        
            datasets: [{
                fill: false,
                pointRadius : 3,
                borderWidth : 3,
                // steppedLine : true,
                label: 'Sensex Live',
                // Add randomness for testing when market is cloased. :P
                //  + Math.floor((Math.random() * 1000))
                data: [...state.datasets[0].data, {x : parseInt(timestamp), y : action.newAddedValue}],
            }]
        }
    }
    return state
}

export default graphDataReducer;