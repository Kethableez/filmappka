namespace FA.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class removeKeywordsFromMovie : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.KeywordMovie", "Keyword_Id", "dbo.Keyword");
            DropForeignKey("dbo.KeywordMovie", "Movie_Id", "dbo.Movie");
            DropIndex("dbo.KeywordMovie", new[] { "Keyword_Id" });
            DropIndex("dbo.KeywordMovie", new[] { "Movie_Id" });
            DropTable("dbo.Keyword");
            DropTable("dbo.KeywordMovie");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.KeywordMovie",
                c => new
                    {
                        Keyword_Id = c.Int(nullable: false),
                        Movie_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Keyword_Id, t.Movie_Id });
            
            CreateTable(
                "dbo.Keyword",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Keyword = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateIndex("dbo.KeywordMovie", "Movie_Id");
            CreateIndex("dbo.KeywordMovie", "Keyword_Id");
            AddForeignKey("dbo.KeywordMovie", "Movie_Id", "dbo.Movie", "Id");
            AddForeignKey("dbo.KeywordMovie", "Keyword_Id", "dbo.Keyword", "Id");
        }
    }
}
