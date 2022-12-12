namespace FA.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class userChanges : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.User", "PasswordHash", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.User", "PasswordHash");
        }
    }
}
