function saturdayFun(text='roller-skate') {
    return `This Saturday, I want to ${text}!`;
}

function mondayWork(text="go to the office") {
    return `This Monday, I will ${text}.`
}

function wrapAdjective (adjective='*') {
    return function (text="special") {
        return `You are ${adjective}${text}${adjective}!`
    }
}
