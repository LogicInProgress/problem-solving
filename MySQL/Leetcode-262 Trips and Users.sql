-- Write your MySQL query statement below
SELECT
  t.request_at AS "Day",
  IFNULL(
    ROUND(
      SUM(
        CASE
          WHEN t.status = 'cancelled_by_client' THEN 1
          WHEN t.status = 'cancelled_by_driver' THEN 1
          ELSE 0
        END
      ) / COUNT(*),
      2
    ),
    0
  ) AS "Cancellation Rate"
FROM
  Trips t
  JOIN Users u1 ON u1.users_id = t.client_id
  JOIN Users u2 ON u2.users_id = t.driver_id
WHERE
  t.request_at <= "2013-10-03"
  AND t.request_at >= "2013-10-01"
  AND u1.banned = "NO"
  AND u2.banned = "NO"
GROUP BY
  t.request_at;