namespace FA.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedFieldsToUser : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.User", "FirstName", c => c.String(nullable: false));
            AddColumn("dbo.User", "UserName", c => c.String(nullable: false));
            AddColumn("dbo.User", "Email", c => c.String(nullable: false));
            DropColumn("dbo.User", "Name");
        }
        
        public override void Down()
        {
            AddColumn("dbo.User", "Name", c => c.String(nullable: false));
            DropColumn("dbo.User", "Email");
            DropColumn("dbo.User", "UserName");
            DropColumn("dbo.User", "FirstName");
        }
    }
}
