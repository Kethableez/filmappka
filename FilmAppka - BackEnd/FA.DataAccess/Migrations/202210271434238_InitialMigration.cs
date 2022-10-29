namespace FA.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Movie",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        YearOfProduction = c.Int(nullable: false),
                        Rating = c.Decimal(nullable: false, precision: 18, scale: 2),
                        Description = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.MovieTypesEnum",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Movietype = c.String(name: "Movie type", nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.User",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        LastName = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.UserMovie",
                c => new
                    {
                        User_Id = c.Int(nullable: false),
                        Movie_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.User_Id, t.Movie_Id })
                .ForeignKey("dbo.User", t => t.User_Id)
                .ForeignKey("dbo.Movie", t => t.Movie_Id)
                .Index(t => t.User_Id)
                .Index(t => t.Movie_Id);
            
            CreateTable(
                "dbo.MovieTypesEnumUser",
                c => new
                    {
                        MovieTypesEnum_Id = c.Int(nullable: false),
                        User_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.MovieTypesEnum_Id, t.User_Id })
                .ForeignKey("dbo.MovieTypesEnum", t => t.MovieTypesEnum_Id)
                .ForeignKey("dbo.User", t => t.User_Id)
                .Index(t => t.MovieTypesEnum_Id)
                .Index(t => t.User_Id);
            
            CreateTable(
                "dbo.MovieTypesEnumUser1",
                c => new
                    {
                        MovieTypesEnum_Id = c.Int(nullable: false),
                        User_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.MovieTypesEnum_Id, t.User_Id })
                .ForeignKey("dbo.MovieTypesEnum", t => t.MovieTypesEnum_Id)
                .ForeignKey("dbo.User", t => t.User_Id)
                .Index(t => t.MovieTypesEnum_Id)
                .Index(t => t.User_Id);
            
            CreateTable(
                "dbo.MovieMovieTypesEnum",
                c => new
                    {
                        Movie_Id = c.Int(nullable: false),
                        MovieTypesEnum_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Movie_Id, t.MovieTypesEnum_Id })
                .ForeignKey("dbo.Movie", t => t.Movie_Id)
                .ForeignKey("dbo.MovieTypesEnum", t => t.MovieTypesEnum_Id)
                .Index(t => t.Movie_Id)
                .Index(t => t.MovieTypesEnum_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.MovieMovieTypesEnum", "MovieTypesEnum_Id", "dbo.MovieTypesEnum");
            DropForeignKey("dbo.MovieMovieTypesEnum", "Movie_Id", "dbo.Movie");
            DropForeignKey("dbo.MovieTypesEnumUser1", "User_Id", "dbo.User");
            DropForeignKey("dbo.MovieTypesEnumUser1", "MovieTypesEnum_Id", "dbo.MovieTypesEnum");
            DropForeignKey("dbo.MovieTypesEnumUser", "User_Id", "dbo.User");
            DropForeignKey("dbo.MovieTypesEnumUser", "MovieTypesEnum_Id", "dbo.MovieTypesEnum");
            DropForeignKey("dbo.UserMovie", "Movie_Id", "dbo.Movie");
            DropForeignKey("dbo.UserMovie", "User_Id", "dbo.User");
            DropIndex("dbo.MovieMovieTypesEnum", new[] { "MovieTypesEnum_Id" });
            DropIndex("dbo.MovieMovieTypesEnum", new[] { "Movie_Id" });
            DropIndex("dbo.MovieTypesEnumUser1", new[] { "User_Id" });
            DropIndex("dbo.MovieTypesEnumUser1", new[] { "MovieTypesEnum_Id" });
            DropIndex("dbo.MovieTypesEnumUser", new[] { "User_Id" });
            DropIndex("dbo.MovieTypesEnumUser", new[] { "MovieTypesEnum_Id" });
            DropIndex("dbo.UserMovie", new[] { "Movie_Id" });
            DropIndex("dbo.UserMovie", new[] { "User_Id" });
            DropTable("dbo.MovieMovieTypesEnum");
            DropTable("dbo.MovieTypesEnumUser1");
            DropTable("dbo.MovieTypesEnumUser");
            DropTable("dbo.UserMovie");
            DropTable("dbo.User");
            DropTable("dbo.MovieTypesEnum");
            DropTable("dbo.Movie");
        }
    }
}
