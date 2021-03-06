USE [Store]
GO
/****** Object:  StoredProcedure [dbo].[GetEmployeesByLevelId]    Script Date: 3/21/2016 10:25:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Michael Whitfield
-- Create date: 3/16/2016
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[GetEmployeesByLevelId]
	@LevelId INT
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

	where l.Id = @LevelId
END 
