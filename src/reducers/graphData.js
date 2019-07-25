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

const graphDataReducer = (state = graphData, action) => {
    // let newState = state
    // let timestamp = Date.now().toString()
    // newState.labels.push(timestamp)
    // newState.datasets[0].data.push({x : parseInt(timestamp), y : action.newAddedValue})
    // return newState
    // Above is Wrong, https://redux.js.org/troubleshooting#never-mutate-reducer-arguments XXXXXXXXXX

    if (action.type === 'appendToGraphData'){ // Now I know why it is required :P
        let timestamp = Date.now().toString()
        if (state.labels.length > 19){
            // Currently Not wrking 
            console.log('graphDataReducer : greater than 5 ')
            // Remove first object when lenght is greater than `x`
            return {
            // https://www.freecodecamp.org/forum/t/redux-remove-an-item-from-an-array-challenge-help/203038/5
                labels: [...state.labels, timestamp],
                // Very inefficent - Complexity = `n`
                datasets: [{
                    fill: false,
                    pointRadius : 3,
                    borderWidth : 3,
                    // steppedLine : true,
                    label: 'Sensex Live',
                    // Added randomness for testing when market is cloased. :P
                    data: [...state.datasets[0].data, {x : parseInt(timestamp), y : action.newAddedValue  + Math.floor((Math.random() * 1000))}],
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
        
                data: [...state.datasets[0].data, {x : parseInt(timestamp), y : action.newAddedValue + Math.floor((Math.random() * 1000))}],
            }]
        }
    }
    return state
}

export default graphDataReducer;