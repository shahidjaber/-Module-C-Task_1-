
let myObj = {
    firstName: 'Muhammad',
    lastName: 'Shahid',
    address: {
        address1: 'Karachi',
        address2: 'Lahore'
    }
}

let mySecondObj = {
    ...myObj,

    address:   {address1:'Karachi', address2: 'Islamabad'}
};

console.log('My First Obj ====> ' , myObj );
console.log('My Second Obj ====>',  mySecondObj);