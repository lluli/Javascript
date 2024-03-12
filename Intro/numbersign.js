function getNumberSign(number) {
if (number < 0) {
    return 'negative'
} else if (number === 0) {
    return 'zero'
} else {
    return 'positive' 
}
} 

module.exports = getNumberSign