USE [Store]
GO
/****** Object:  StoredProcedure [dbo].[GetEmployeePositionById]    Script Date: 3/21/2016 10:19:36 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		Michael Whitfield
-- Create date: 3/16/2016
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[GetEmployeePositionById]
	@EmployeeId INT
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	--Select * from Employee e
	--Select * from Position p

	select 
		p.Id, 
		p.LevelId,
		p.Name

	from Employee e
	inner join Position p on e.Positionid = p.Id

	where e.Id = @EmployeeId
	--where p.Id = @EmployeeId
END 
