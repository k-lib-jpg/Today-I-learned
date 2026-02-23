SELECT shohin_bunrui, COUNT(*)
postgres-#   FROM Shohin
postgres-#  GROUP BY shohin_bunrui;

SELECT shohin_bunrui, COUNT(*)
FROM Shohin
WHERE shohin_bunrui = '衣服'  
GROUP BY shohin_bunrui;

