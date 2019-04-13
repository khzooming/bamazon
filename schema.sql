DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;
CREATE TABLE products (
item_id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(30),
price DECIMAL (6, 2) NOT NULL,
stock_quantity INT(14)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Vans Tennis Shoes", "Shoes", 45.00, 2500), 
("Merrell t-shirt", "Women's Apparel", 32.00, 812), 
("Levi Jeans Mens", "Men's Apparel", 38.00, 450), 
("Concert t-shirt Imagine Dragons", "Women's Apparel", 73.00, 150), 
("Hanes Socks", "Men's Apparel", 12.74, 261),
("Leather Jacket", "Men's Apparel", 106.00, 2000),
("Coach Purse", "Accessories", 68.72, 170),
("Coach Wallet", "Acessories", 39.00, 250), 
("Cole's Dress Shoes", "Shoes", 81.00, 138), 
("Ragdoll Lounge Wear Bottoms", "Women's Apparel", 52.00, 457),
("Ragdoll Lounge Wear Top", "Women's Apparel", 61.00, 480);

SELECT * FROM products;


