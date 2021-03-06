USE [Store]
GO
/****** Object:  StoredProcedure [dbo].[GetEmployeesByLevelName]    Script Date: 3/21/2016 10:30:04 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Michael Whitfield
-- Create date: 3/16/2016
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[GetEmployeesByLevelName]
	@LevelName varChar(50)
AS
BEGIN

	SET NOCOUNT ON;


	select 
	e.Id ,
	e.Name ,
	e.PositionId,
	e.AddressId,
	e.Salary

	from Employee e
	inner join Position p on e.Positionid = p.Id
	inner join [level] l on p.LevelId = P.Id

	where l.Name = @LevelName
END 
