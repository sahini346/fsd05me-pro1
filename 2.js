// Step 1: Create an object
let person = {
    name: "John Doe",
    age: 25,
    profession: "Web Developer"
};

console.log("Initial object:");
console.log(person);

// -------------------------------
// Step 2: Add a property
person.city = "New York";  // Add new property
console.log("\nAfter adding city property:");
console.log(person);

// -------------------------------
// Step 3: Update a property
person.age = 26;  // Update age property
console.log("\nAfter updating age property:");
console.log(person);

// -------------------------------
// Step 4: Delete a property
delete person.profession;  // Delete profession property
console.log("\nAfter deleting profession property:");
console.log(person);

// -------------------------------
// Optional: Iterate and print all properties
console.log("\nFinal properties of the object:");
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
