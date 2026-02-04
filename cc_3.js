let Sarah = {
    "name": "Sarah",
    "email": "sarah@gmail.com",
    "purchases": ["Milk", "Peanut Butter", "Yogurt"]
};
let Tom = {
    "name": "Tom",
    "email": "tom@gmail.com",
    "purchases": ["Bread", "Butter", "Jam"]
};
let Emma = {
    "name": "Emma",
    "email": "emma@gmail.com",
    "purchases": ["Eggs", "Bread", "Butter"]
};
let Colin = {
    "name": "Colin",
    "email": "colin@gmail.com",
    "purchases": ["Juice", "Apples", "Bananas"]
};

let customers = [Sarah, Tom, Emma];

customers.push(Colin);
customers.shift();

Emma.email = "emmabryant@gmail.com"
Tom.purchases.push("Coffee");

customers.forEach(customer => {
    console.log(
    `Name: ${customer.name}, Email: ${customer.email}, Total Purchases: ${customer.purchases.length}`
    );
});

