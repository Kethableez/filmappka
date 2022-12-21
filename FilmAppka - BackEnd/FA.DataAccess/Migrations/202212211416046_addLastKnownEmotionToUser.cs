namespace FA.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addLastKnownEmotionToUser : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.User", "LastKnownEmotion", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.User", "LastKnownEmotion");
        }
    }
}
