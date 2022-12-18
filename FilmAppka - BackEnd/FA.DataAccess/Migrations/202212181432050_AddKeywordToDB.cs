namespace FA.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddKeywordToDB : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Keyword",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Keyword = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.KeywordMovie",
                c => new
                    {
                        Keyword_Id = c.Int(nullable: false),
                        Movie_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Keyword_Id, t.Movie_Id })
                .ForeignKey("dbo.Keyword", t => t.Keyword_Id)
                .ForeignKey("dbo.Movie", t => t.Movie_Id)
                .Index(t => t.Keyword_Id)
                .Index(t => t.Movie_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.KeywordMovie", "Movie_Id", "dbo.Movie");
            DropForeignKey("dbo.KeywordMovie", "Keyword_Id", "dbo.Keyword");
            DropIndex("dbo.KeywordMovie", new[] { "Movie_Id" });
            DropIndex("dbo.KeywordMovie", new[] { "Keyword_Id" });
            DropTable("dbo.KeywordMovie");
            DropTable("dbo.Keyword");
        }
    }
}
