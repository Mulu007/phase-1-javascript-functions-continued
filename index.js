// code your solution here
function saturdayFun(defaultActivity = 'roller-skate') {
    return (`This Saturday, I want to ${defaultActivity}!`)
}

function mondayWork (defaultActivty = 'go to the office') {
    return (`This Monday, I will ${defaultActivty}.`)
}

const wrapAdjective = function(ngori="*") {
    return function(adjective = 'special' ) {
        return `You are ${ngori}${adjective}${ngori}!`
    }
}
