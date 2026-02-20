/* 例 */
SELECT hanbai_tanka * 2 AS "hanbai_tanka_x2"
  FROM Shohin;

/* +足し算、-引き算、*掛け算、/割り算 */

SELECT shohin_mei, shohin_bunrui, hanbai_tanka
  FROM Shohin
 WHERE NOT hanbai_tanka >= 1000;
