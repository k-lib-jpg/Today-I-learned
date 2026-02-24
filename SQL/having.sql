/* 実行順序の関係でWHERE句を使用できないため、HAVINGを使用する */

SELECT shohin_bunrui, COUNT(*)
  FROM Shohin
 GROUP BY shohin_bunrui
HAVING COUNT(*) = 2;
