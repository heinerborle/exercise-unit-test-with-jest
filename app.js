// this is my function that sums two numbers
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (ammount) => {
    return (ammount / oneEuroIs.USD) * oneEuroIs.JPY
}

const fromEuroToDollar = (ammount) => {
    return ammount * oneEuroIs.USD;
}

const fromYanToPound = (ammount) => {
    return (ammount / oneEuroIs.JPY) * oneEuroIs.GBP;
}

// just a console log for ourselves.
console.log(fromDollarToYen(1))
console.log(fromEuroToDollar(1))
console.log(fromYanToPound(1))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = {
    fromDollarToYen,
    fromEuroToDollar,
    fromYanToPound
};