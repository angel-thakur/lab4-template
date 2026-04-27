/**
 * 
 * @param {*} num1, first number to add. 
 * @param {*} num2, second number to add. 
 * @param {*} add, a boolean value. If true, the two numbers will be added together. If false, the function will return false;
 * @returns The sum of the two numbers
 */
function sumValues(num1, num2, add) {
    if(typeof(num1) !== "number" || typeof(num2) !== "number") {
        return false;
    }
    if(add === true){
        return num1 + num2;
    }
    return false;
}

/**
 * 
 * @param {*} prices, an array of the original price.
 * @param {*} discount, a number betwee 0-1 to represent the discount. 
 * @returns An array of each price's new price, after the discount is applied. Or false, if prices array is empty.
 */
function discountPrices(prices, discount) {
    if(typeof(prices) !== "array" || typeof(discount) !== "number" || discount < 0 || discount > 1) {
        return false;
    }
    const discounted = []
    const length = prices.length;
    if(length === 0) {
        return false;
    }
    for(let i = 0; i < length; i++) {
        let discountedPrice = 0
        discountedPrice = prices[i] * (1 - discount);
        discounted.push(discountedPrice);
    }

    return discounted;
}

module.exports = {sumValues, discountPrices};