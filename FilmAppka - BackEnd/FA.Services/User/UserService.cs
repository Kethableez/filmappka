using AutoMapper;
using FA.DataAccess;
using FA.Domain.Entities;
using FA.Services.Models;
using Microsoft.AspNetCore.Hosting.Internal;
using Microsoft.VisualBasic.FileIO;
using System.Text.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DnsClient;

namespace FA.Services.User
{
    public class UserService : IUserService
    {
        private readonly FADbContext faDbContext;
        private readonly Mapper mapper;
        public UserService(FADbContext _faDbContext, Mapper _mapper)
        {
            faDbContext = _faDbContext;
            mapper = _mapper;
        }
        public UserInfo getUser(string username)
        {
            var dbUser = faDbContext.Set<Domain.Entities.User>().Where(x => x.Username == username).FirstOrDefault();
            var user = new UserInfo();
            mapper.Map(dbUser, user); ;
            return user;
        }

        public void createUser(string username)
        {
            var dbUser = faDbContext.Set<Domain.Entities.User>().Where(x => x.Username == username).FirstOrDefault();
            if (dbUser == null)
            {
                dbUser = new Domain.Entities.User();
                dbUser.Username = username;
                faDbContext.Set<Domain.Entities.User>().Add(dbUser);
                faDbContext.SaveChanges();
            }
            else
            {
                throw new Exception("Username Taken");
            }
        }

        public void updateMoviesDatabase(string rootPath)
        {
            using (TextFieldParser csvParser = new TextFieldParser(rootPath + "\\Data\\tmdb_5000_movies.csv"))
            {
                csvParser.CommentTokens = new string[] { "#" };
                csvParser.SetDelimiters(new string[] { "," });
                csvParser.HasFieldsEnclosedInQuotes = true;
                csvParser.ReadLine();
                while (!csvParser.EndOfData)
                {
                    string[] fields = csvParser.ReadFields();
                    var typesJson = JsonSerializer.Deserialize<List<TypeJsonModel>>(fields[1]);
                    foreach (var type in typesJson)
                    {
                        var typeDbModel = mapper.Map<MovieTypesEnum>(type);
                        faDbContext.Set<MovieTypesEnum>().AddIfNotExists(typeDbModel, x => x.Value.ToLower() == typeDbModel.Value.ToLower());

                    }
                    faDbContext.SaveChanges();
                }
            }

            using (TextFieldParser csvParser = new TextFieldParser(rootPath + "\\Data\\tmdb_5000_movies.csv"))
            {
                csvParser.CommentTokens = new string[] { "#" };
                csvParser.SetDelimiters(new string[] { "," });
                csvParser.HasFieldsEnclosedInQuotes = true;
                csvParser.ReadLine();

                while (!csvParser.EndOfData)
                {
                    string[] fields = csvParser.ReadFields();
                    var typeNames = JsonSerializer.Deserialize<List<TypeJsonModel>>(fields[1]).Select(x=>x.name);
                    var typesDb = faDbContext.Set<MovieTypesEnum>().Where(x => typeNames.Contains(x.Value)).ToList();
                    if (fields[11] != "")
                    {
                        var image = "";
                        if(fields.Length == 21)
                        {
                            image = fields[20];
                        }
                        var movieVm = new Domain.Entities.Movie()
                        {
                            Name = fields[6],
                            YearOfProduction = int.Parse(fields[11].Split("-")[0]),
                            Rating = decimal.Parse(fields[18].Replace(".", ",")),
                            NumberOfVoters = int.Parse(fields[19]),
                            Description = fields[7],
                            MovieTypes = typesDb,
                            ImageLink = image,
                        };
                        var movie = mapper.Map<Domain.Entities.Movie>(movieVm);
                        faDbContext.Set<Domain.Entities.Movie>().AddIfNotExists(movie, x => x.Name == movie.Name);
                        faDbContext.SaveChanges();
                    }

                }

            }
        }
    }
}
