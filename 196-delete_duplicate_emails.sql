DELETE FROM person
WHERE id NOT IN (
    SELECT id 
    FROM (
        SELECT MIN(id) id 
        FROM person 
        GROUP BY email
    ) i
)
