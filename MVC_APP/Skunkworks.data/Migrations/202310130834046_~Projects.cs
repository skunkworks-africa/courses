namespace Skunkworks.data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Projects : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Projects", "UserId", c => c.Int(nullable: false));
            AddColumn("dbo.Users", "Projects_Id", c => c.Int());
            CreateIndex("dbo.Users", "Projects_Id");
            AddForeignKey("dbo.Users", "Projects_Id", "dbo.Projects", "Id");
            DropColumn("dbo.Projects", "AssignTo");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Projects", "AssignTo", c => c.Int(nullable: false));
            DropForeignKey("dbo.Users", "Projects_Id", "dbo.Projects");
            DropIndex("dbo.Users", new[] { "Projects_Id" });
            DropColumn("dbo.Users", "Projects_Id");
            DropColumn("dbo.Projects", "UserId");
        }
    }
}
