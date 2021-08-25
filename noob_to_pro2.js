//https://www.youtube.com/watch?v=g2nMKzhkvxw min :9:10

//nab version (from vid):

// function calculateTotal(items, options) {
//     let t = 0;

//     items.forEach(i => {
//         t += i.price * i.quan
//     })
//     t = t - t * (options.dis || 0)
//     t = t * 1.1;
//     t= t + (options.ship || 5)
//     return t
// }

const testItems = [
    {price: 15, quantity:2},
    {price: 20, quantity: 1},
    {price: 5, quantity: 4}
]

// console.log(calculateTotal())
// console.log(calculateTotal(testItems))

//MY version (written before advanved and pro):

// let calculateTotal = (itemsArr=[], optionsObj={dis:0, ship:5}) => {
//     if(!(itemsArr instanceof Array && itemsArr.length)) return;
//     let totalPrice = itemsArr.reduce(
//         (totalPrice,item)=>totalPrice+item.price*item.quan,
//         0
//     )
//     totalPrice *= 1.1;
//     totalPrice += optionsObj.ship;
//     totalPrice -= totalPrice * optionsObj.dis
//     return totalPrice;
// }

// console.log(calculateTotal())
// console.log(calculateTotal(testItems))

//Advanced version - clear variable names, tax and shipping moved to constants
//check for existence of arguments and return 0 if there are no items ordered
//avoided the "or trap" where passing a legit value of 0 will cause or statement to pass
//the other one, like setting shipping cost to 0 would cause the default 5 to be added
//in the nab version of this code.

// const TAX_RATE = 1.1
// const SHIPPING_DEFAULT = 5

// function calculateTotal(items, options={}) {
//     if(items == null || items.length === 0) return 0

//     let total = 0
//     items.forEach(item => {
//         total += item.price * item.quantity
//     })
//     total = total - total * (options.discount || 0)
//     total = total * TAX_RATE
//     if (options.shipping !==0) {
//         total = total + (options.shipping || SHIPPING_DEFAULT)
//     }
//     return total
// }

//PRO version - this is what you get after a solid refactor
//Destructured and default values set in option object in function parameters
//reducer used (so kinda like my version), compressed calculations that no longer need 
//total variable updated each line, which takes a lot of tracking for the reader.
//item price is set as const, so it's one time only. Rest are just fixed modifiers.

// const TAX_RATE = 1.1
// const SHIPPING_DEFAULT = 5

// function calculateTotal (items, {shipping = SHIPPING_DEFAULT, discount = 0} = {}) {
//     if(items == null || items.length === 0) return 0

//     const itemCost = items.reduce((total, item) => {
//         return total + item.price * item.quantity
//     },0)
//     const discountRate = 1 - discount;

//     return itemCost * discountRate * TAX_RATE + shipping
// }

// console.log(calculateTotal())
// console.log(calculateTotal(testItems))

// console.log(calculateTotal())
// console.log(calculateTotal(testItems))

//MY version (written after advanved and pro):

const TAX_RATE = 1.1
const SHIPPING_DEFAULT = 5

let calculateTotal = (itemsArr=[], {discount=0, shipping=SHIPPING_DEFAULT}={}) => {
    if(!(itemsArr instanceof Array && itemsArr.length)) return 0;
    
    let itemCost = itemsArr.reduce((totalPrice,item)=> {
        return totalPrice+item.price*item.quantity
        },0);

    const discountRate = 1 - discount;
    return itemCost * discountRate * TAX_RATE + shipping;
}


console.log(calculateTotal())
console.log(calculateTotal(testItems,"error"))