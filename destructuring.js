
let myObj = {
    firstName: 'Muhammad',
    lastName: 'Shahid',
    address: {
        address1: 'Karachi',
        address2: 'Lahore'
    }
}
const {address: {address1, address2: {address2 = "Islamabad"}}} = myObj;

console.log(address1,address2);