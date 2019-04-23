USE bamazonDB;
SELECT * FROM products;

SELECT stock_quantity FROM products WHERE item_id = 6;



-- adjust value of stock_quantity column in specific row defined by id
UPDATE products SET stock_quantity = 1799 WHERE item_id = 6;
