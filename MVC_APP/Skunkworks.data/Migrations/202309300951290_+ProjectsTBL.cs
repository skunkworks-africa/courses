namespace Skunkworks.data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ProjectsTBL : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Projects",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        About = c.String(nullable: false),
                        DueDate = c.String(),
                        Budget = c.String(),
                        Links = c.String(),
                        AssignTo = c.Int(nullable: false),
                        DateCreated = c.DateTime(nullable: false),
                        DateModified = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Projects");
        }
    }
}
