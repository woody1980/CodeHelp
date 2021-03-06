/****** Script for SelectTopNRows command from SSMS  ******/
--SELECT [Id],[Name]
--  FROM [Store].[dbo].[Level]

SELECT lev.Id, lev.Name
--sum (lev.Id), lev.Name -- add the id times number of records grouped
--count (lev.Id), lev.Name -- counts how many times records appear by the name in this case
FROM [Store].[dbo].[Level] lev
--Where lev.Id = 1 or lev.Id = 2
--Where lev.Name like 'Mid %' -- looks for anything before the pecent like is like indexOf, dont use on large varChars!
-- order by lev.Name -- sepcified last
group by lev.Name, lev.Id -- group creates soft tables which stores the like records by whatever specified
--having (lev.id < 2)-- having clause can only be specified with a group by
having (lev.Id >2 and count (*) < 6)