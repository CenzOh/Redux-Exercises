const IncrementBy = 'IncrementBy';

function IncrementBy(text) {
    return {
        type: IncrementBy,
        text: '5'
    }
}

//Pass in the value 5 so the fcn will return an action to increment by that amount