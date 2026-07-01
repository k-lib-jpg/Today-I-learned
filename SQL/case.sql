SELECT shohin_mei,
       CASE WHEN <評価式> THEN <式>
            WHEN <評価式> THEN <式>
            WHEN <評価式> THEN <式>
            ELSE <式>
       END
--単純case式　例
SELECT shohin_mei,
       CASE WHEN '衣服'         THEN 'A：' || shohin_bunrui
            WHEN '事務用品'     THEN 'B：' || shohin_bunrui
            WHEN 'キッチン用品' THEN 'C：' || shohin_bunrui
            ELSE NULL
       END AS abc_shohin_bunrui
  FROM Shohin;
       
--検索case式　例
SELECT shohin_mei,
       CASE WHEN shohin_bunrui = '衣服'         THEN 'A：' || shohin_bunrui
            WHEN shohin_bunrui = '事務用品'     THEN 'B：' || shohin_bunrui
            WHEN shohin_bunrui = 'キッチン用品' THEN 'C：' || shohin_bunrui
            ELSE NULL
       END AS abc_shohin_bunrui
  FROM Shohin;
