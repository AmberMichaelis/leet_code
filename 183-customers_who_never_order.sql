SELECT c.name AS Customers
FROM customers c
LEFT JOIN orders o 
    ON c.id = o.customerId
WHERE o.customerId IS NULL;

-- OR, top one is faster

SELECT c.name AS Customers
FROM customers c
WHERE c.id NOT IN (
        SELECT o.customerId FROM orders o
    )
