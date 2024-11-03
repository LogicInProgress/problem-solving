SELECT
  p.product_id,
  -- IFNULL is used here for the following reasons:
  -- 1. Performance: IFNULL is faster than COALESCE as it only checks for one NULL case
  -- 2. Handling Division by Zero: When no units are sold (SUM(us.units) = 0), the division results in NULL
  -- 3. Data Completeness: Returns 0 instead of NULL for products with no sales, ensuring consistent output
  -- The calculation works as follows:
  -- - SUM(us.units * p.price): Calculates total revenue for each product
  -- - SUM(us.units): Calculates total units sold
  -- - Division of these gives weighted average price
  -- - ROUND(..., 2): Formats to 2 decimal places
  -- - If the result is NULL (no sales), returns 0
  IFNULL(
    ROUND(SUM(us.units * p.price) / SUM(us.units), 2),
    0
  ) AS average_price -- ROUND(
  --   COALESCE(SUM(p.price * us.units) / SUM(us.units), 0),
  --   2
  -- ) as average_price
FROM
  Prices p
  LEFT JOIN UnitsSold us ON p.product_id = us.product_id
  AND us.purchase_date BETWEEN p.start_date
  AND p.end_date
GROUP BY
  p.product_id;