// import the function sum from the app.js file
const app = require('./app.js');

// start your first test

test("One euro should be 1.206 dollars", function () {
    //import the function from app.js
    const {
        fromEuroToDollar
    } = require('./app.js')

    // Euros to use for conversion
    const euros = 1

    // The value the test should expect
    const expected = fromEuroToDollar(euros);

    // this is the comparison for the unit test
    expect(fromEuroToDollar(euros)).toBe(expected);
})

test("One dollar should be 106.5833 yen", function () {
    //import the function from app.js
    const {
        fromDollarToYen
    } = require('./app.js')

    // Dollars to use for conversion
    const dollars = 1;

    // The value the test should expect
    const expected = fromDollarToYen(dollars);

    // this is the comparison for the unit test
    expect(fromDollarToYen(dollars)).toBe(expected);
})

test("One Yan should be 0.006254886630179828 pounds", function () {
    //import the function from app.js
    const {
        fromYanToPound
    } = require('./app.js')

    // Yen to use for conversion
    const yen = 1;

    // The value the test should expect
    const expected = fromYanToPound(yen);

    // this is the comparison for the unit test
    expect(fromYanToPound(yen)).toBe(expected);
})