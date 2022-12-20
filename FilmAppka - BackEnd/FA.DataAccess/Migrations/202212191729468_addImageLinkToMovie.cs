namespace FA.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addImageLinkToMovie : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Movie", "ImageLink", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Movie", "ImageLink");
        }
    }
}
