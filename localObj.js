
let myObj = {
    firstName: "Muhammad",
    lastName: "Shhaid",
    age: 27
};

let myObject = JSON.stringify(myObj);

localStorage.setItem("myObj", myObject);

let localObj = JSON.parse(localStorage.getItem("myObj"));

console.log(localObj);