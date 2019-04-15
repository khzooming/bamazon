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

function orderProduct() {
    return new Promise(function (resolve, reject) {
        // setTimeout(() => {
            inquirer.prompt([
                {
                    type: "input",
                    name: "chooseID",
                    message: "Please enter the ID of the item you'd like to purchase."
                },
            ])
            // if (!err) {
            //     resolve();
            // } else {
            //     reject("error in ID choosing");
            // }
            // }, 1000);
            
        }).then(function (choice) {
            console.log("from prompt - you have chosen " + choice);
            setTimeout(() => {

            console.log("from first .then function " + choice)
            // alert(answer*2);
            if (choice) {
                console.log("Great, thanks for your interest in product ID # " + choice);
            } else {
                console.log("Thanks for vising our store.  We hope to see you again soon!");
            }
            connection.query(`SELECT * FROM products WHERE item_id ='${answer}'`, function (err, row) {
                // SELECT * FROM top5000 WHERE artist = 'Mariah Carey';

                console.log(answer);
                console.log(
                    "ID= " + row[0].item_id,
                    ":  " + row.product_name,
                    row.department_name,
                    row.price,
                    row.stock_quantity);

                console.log(row);

            }, 2000);
        });
    }).catch(err => console.log(err));
}


    // var Promise = require('promise');

    // var promise = new Promise(function (resolve, reject) {
    //   get('http://www.google.com', function (err, res) {
    //     if (err) reject(err);
    //     else resolve(res);
    //   });
    // });






// var promise1 = new Promise(function(resolve, reject) {
//     throw 'Uh-oh!';
//   });

//   promise1.catch(function(error) {
//     console.log(error);
//   });


// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//           resolve(userInput());
//       }, 2000);
//       });
//   }
