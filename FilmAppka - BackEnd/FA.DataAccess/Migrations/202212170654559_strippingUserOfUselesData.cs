namespace FA.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class strippingUserOfUselesData : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.User", "FirstName");
            DropColumn("dbo.User", "Email");
            DropColumn("dbo.User", "LastName");
            DropColumn("dbo.User", "PasswordHash");
        }
        
        public override void Down()
        {
            AddColumn("dbo.User", "PasswordHash", c => c.String(nullable: false));
            AddColumn("dbo.User", "LastName", c => c.String(nullable: false));
            AddColumn("dbo.User", "Email", c => c.String(nullable: false));
            AddColumn("dbo.User", "FirstName", c => c.String(nullable: false));
        }
    }
}
