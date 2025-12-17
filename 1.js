// Step 1: Create an object
let person = {
    name: "John Doe",
    age: 25,
    profession: "Web Developer",
    city: "New York"
};

// Step 2: Print the object properties using for...in loop
console.log("Person object properties:");
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// Step 3: Alternative way: print using Object.keys()
console.log("\nUsing Object.keys():");
Object.keys(person).forEach(function(key) {
    console.log(key + ": " + person[key]);
});
