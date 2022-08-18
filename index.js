// Write your solution in this file!
var customerName = "bob"
const leastFavoriteCustomer = "rick"

function nameGlobal() {
    return customerName


}

// first try
// function upperCaseCustomerName() {
//     // let upperCaseCustomerName = customerName
//     if (upperCaseCustomerName = customerName) {
//         return upperCaseCustomerName.toUpperCase
//     }
// }


function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

function setBestCustomer() {
     bestCustomer = "not bob"
     console.log(customerName)
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
}

 function changeLeastFavoriteCustomer() {
    // const leastFavoriteCustomer = "rick"
    return leastFavoriteCustomer = "rick"
 }