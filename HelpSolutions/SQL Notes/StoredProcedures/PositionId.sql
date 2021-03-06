USE [Store]
GO
/****** Object:  StoredProcedure [dbo].[GetEmployeesByPositionId]    Script Date: 3/21/2016 10:30:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Michael Whitfield
-- Create date: 3/16/2016
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[GetEmployeesByPositionId]
	@PositionId INT
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	--Select * from Employee e
	--Select * from Position p

	select 
	e.Id ,
	e.Name ,
	e.PositionId,
	e.AddressId,
	e.Salary

	from Employee e
	inner join Position p on e.Positionid = p.Id

	where p.Id = @PositionId
END 
