namespace Skunkworks.data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        FirstName = c.String(nullable: false),
                        LastName = c.String(nullable: false),
                        EmailAddress = c.String(nullable: false),
                        ContactNumber = c.String(),
                        DateOfBirth = c.DateTime(),
                        Password = c.String(nullable: false),
                        ResetPasswordCode = c.String(),
                        IsEmailVerified = c.Boolean(nullable: false),
                        ActivationCode = c.Guid(nullable: false),
                        IsAdmin = c.Boolean(nullable: false),
                        StreetNameAndNumber = c.String(),
                        Suburb = c.String(),
                        City = c.String(),
                        PostalCode = c.Int(nullable: false),
                        Province = c.String(),
                        Image = c.String(),
                        UserRole = c.String(),
                        DateCreated = c.DateTime(nullable: false),
                        DateModified = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Users");
        }
    }
}
