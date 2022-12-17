namespace FA.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addNumberOfVotersToMovie : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Movie", "NumberOfVoters", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Movie", "NumberOfVoters");
        }
    }
}
