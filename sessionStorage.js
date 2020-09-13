const myObj = {
    firstName: "Muhammad",
    lastName: "Shahid",
    age: 27,
    Address: "Karachi"
};

sessionStorage.setItem('objValue', JSON.stringify(myObj));

console.log(JSON.parse(sessionStorage.getItem('objValue')));