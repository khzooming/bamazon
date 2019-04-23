var mysql = require("mysql");
var inquirer = require("inquirer");
// let unhandledRejection = require("unhandled-rejection");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 8889,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});

// let rejectionEmitter = unhandledRejection({
//     timeout: 20
// });

// rejectionEmitter.on("unhandledRejection", (error, promise) => {
//    connection.host.registerError(error);
// });

// rejectionEmitter.on("rejectionHandled", (error, promise) => {
//     connection.host.registerHandled(error);
// })


function displayData() {
    connection.query(`SELECT * FROM products`, function (err, rows) {
        if (err) throw err;
        console.log("Welcome to our store!  Here's our products available for sale: ");
        for (var i = 0; i < rows.length; i++) {
            console.log(
                "ID= " + rows[i].item_id,
                ":  " + rows[i].product_name,
                rows[i].department_name,
                rows[i].price,
                rows[i].stock_quantity);
        }
    })
}

displayData();

setTimeout(orderProduct, 1000);
units = "";
choice = "";

function orderProduct(choice) {
    inquirer.prompt([{
            type: "input",
            name: "chooseID",
            message: "Please enter the ID of the item you'd like to purchase."
        },
        {
            type: "input",
            name: "units",
            message: "How many units would you like to purchase?"
        }
    ]).then(function (choice) {
        // console.log("from prompt - you have chosen " + choice.chooseID);
        setTimeout(() => {

            // rows should be plural here due to the where statement
            connection.query(`SELECT stock_quantity FROM products WHERE item_id ='${choice.chooseID}'`, function (err, rows) {
                if (err) {
                    console.log(err);
                }
                console.log("thanks for your interest in purchasing " + choice.units + " of item #" + choice.chooseID);
                // console.log(rows);
                // console.log(rows[0].stock_quantity);
                quantity = rows[0].stock_quantity;
                console.log(quantity);

                if (quantity >= choice.units) {
                    connection.query(`SELECT price FROM products WHERE item_id ='${choice.chooseID}'`, function (err, data) {
                        if (err) {
                            console.log(err);
                        }
                        var newQuantity = quantity - choice.units;
                        var price = data[0].price;
                        var totalPrice = price * choice.units;
                        console.log(data);
                        console.log(price);
                        console.log("quantity = " + quantity + " ordered amount =" + choice.units + "result amount = " + newQuantity);
                        console.log("thanks for your order, your total price will be $" + totalPrice);
                        console.log("our amount of stock for item # " + choice.chooseID + " is now " + newQuantity);
                    connection.query(`UPDATE products SET stock_quantity = '${newQuantity}' WHERE item_id ='${choice.chooseID}'`, function (err, rows) {
                        if (err) {
                            console.log(err);
                        }
                    })
                    })
                } else {
                    console.log("I'm sorry, we have insufficient inventory to process your order.");
                }
            }, 2000);
        });

    }).catch(error => console.log(error));
}
