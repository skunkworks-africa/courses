namespace Skunkworks.data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class fields_UserTBL : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Users", "About", c => c.String());
            AddColumn("dbo.Users", "JobTitle", c => c.String());
            AddColumn("dbo.Users", "Facebook", c => c.String());
            AddColumn("dbo.Users", "Instagram", c => c.String());
            AddColumn("dbo.Users", "LinkedIn", c => c.String());
            DropColumn("dbo.Users", "DateOfBirth");
            DropColumn("dbo.Users", "Suburb");
            DropColumn("dbo.Users", "PostalCode");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Users", "PostalCode", c => c.Int(nullable: false));
            AddColumn("dbo.Users", "Suburb", c => c.String());
            AddColumn("dbo.Users", "DateOfBirth", c => c.DateTime());
            DropColumn("dbo.Users", "LinkedIn");
            DropColumn("dbo.Users", "Instagram");
            DropColumn("dbo.Users", "Facebook");
            DropColumn("dbo.Users", "JobTitle");
            DropColumn("dbo.Users", "About");
        }
    }
}
