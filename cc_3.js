let customers = [{
    "name": "Sarah",
    "email": "sarah@gmail.com",
    "purchases": ["Milk", "Peanut Butter", "Yogurt"]
},
{    "name": "Tom",
    "email": "tom@gmail.com",
    "purchases": ["Bread", "Butter", "Jam"]},
{ "name": "Emma",
    "email": "emma@gmail.com",
    "purchases": ["Eggs", "Bread", "Butter"]},
];

customers.push({
    "name": "Colin",
    "email": "colin@gmail.com",
    "purchases": ["Juice", "Apples", "Bananas"]
});

customers.shift();

for (let customer of customers) {
    if (customer.name == 'Emma') {
        customer.email = "emma@cool.net"
    }
}
for (let customer of customers) {
    if (customer.name == 'Tom') {
        customer.purchases.push("Coffee")
    }
}
customers.forEach(customer => {
    console.log(
    `Name: ${customer.name}, Email: ${customer.email}, Total Purchases: ${customer.purchases.length}`
    );
});

