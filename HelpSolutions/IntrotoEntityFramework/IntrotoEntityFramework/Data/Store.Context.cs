﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IntrotoEntityFramework.Data
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class StoreContainer1 : DbContext
    {
        public StoreContainer1()
            : base("name=StoreContainer1")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Address> Addresses { get; set; }
        public virtual DbSet<Employee> Employees { get; set; }
        public virtual DbSet<Level> Levels { get; set; }
        public virtual DbSet<Position> Positions { get; set; }
        public virtual DbSet<vwEmployeePosition> vwEmployeePositions { get; set; }
    
        public virtual ObjectResult<Position> GetEmployeePositionById(Nullable<int> employeeId)
        {
            var employeeIdParameter = employeeId.HasValue ?
                new ObjectParameter("EmployeeId", employeeId) :
                new ObjectParameter("EmployeeId", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Position>("GetEmployeePositionById", employeeIdParameter);
        }
    
        public virtual ObjectResult<Position> GetEmployeePositionById(Nullable<int> employeeId, MergeOption mergeOption)
        {
            var employeeIdParameter = employeeId.HasValue ?
                new ObjectParameter("EmployeeId", employeeId) :
                new ObjectParameter("EmployeeId", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Position>("GetEmployeePositionById", mergeOption, employeeIdParameter);
        }
    
        public virtual ObjectResult<Employee> GetEmployeesByAddressId(Nullable<int> addressId)
        {
            var addressIdParameter = addressId.HasValue ?
                new ObjectParameter("AddressId", addressId) :
                new ObjectParameter("AddressId", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Employee>("GetEmployeesByAddressId", addressIdParameter);
        }
    
        public virtual ObjectResult<Employee> GetEmployeesByAddressId(Nullable<int> addressId, MergeOption mergeOption)
        {
            var addressIdParameter = addressId.HasValue ?
                new ObjectParameter("AddressId", addressId) :
                new ObjectParameter("AddressId", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Employee>("GetEmployeesByAddressId", mergeOption, addressIdParameter);
        }
    
        public virtual ObjectResult<Employee> GetEmployeesByLevelId(Nullable<int> levelId)
        {
            var levelIdParameter = levelId.HasValue ?
                new ObjectParameter("LevelId", levelId) :
                new ObjectParameter("LevelId", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Employee>("GetEmployeesByLevelId", levelIdParameter);
        }
    
        public virtual ObjectResult<Employee> GetEmployeesByLevelId(Nullable<int> levelId, MergeOption mergeOption)
        {
            var levelIdParameter = levelId.HasValue ?
                new ObjectParameter("LevelId", levelId) :
                new ObjectParameter("LevelId", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Employee>("GetEmployeesByLevelId", mergeOption, levelIdParameter);
        }
    
        public virtual ObjectResult<Employee> GetEmployeesByLevelName(string levelName)
        {
            var levelNameParameter = levelName != null ?
                new ObjectParameter("LevelName", levelName) :
                new ObjectParameter("LevelName", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Employee>("GetEmployeesByLevelName", levelNameParameter);
        }
    
        public virtual ObjectResult<Employee> GetEmployeesByLevelName(string levelName, MergeOption mergeOption)
        {
            var levelNameParameter = levelName != null ?
                new ObjectParameter("LevelName", levelName) :
                new ObjectParameter("LevelName", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Employee>("GetEmployeesByLevelName", mergeOption, levelNameParameter);
        }
    
        public virtual ObjectResult<Employee> GetEmployeesByPositionId(Nullable<int> positionId)
        {
            var positionIdParameter = positionId.HasValue ?
                new ObjectParameter("PositionId", positionId) :
                new ObjectParameter("PositionId", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Employee>("GetEmployeesByPositionId", positionIdParameter);
        }
    
        public virtual ObjectResult<Employee> GetEmployeesByPositionId(Nullable<int> positionId, MergeOption mergeOption)
        {
            var positionIdParameter = positionId.HasValue ?
                new ObjectParameter("PositionId", positionId) :
                new ObjectParameter("PositionId", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Employee>("GetEmployeesByPositionId", mergeOption, positionIdParameter);
        }
    }
}
