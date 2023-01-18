import React, { useCallback, useState } from "react";
import { isTemplateExpression } from "typescript";
import { Link } from "react-router-dom";
import "./FilmSlider.css";

import "./Slider.js";
import { FaEyeSlash, FaEye } from "react-icons/fa";

interface FilmSliderProps {}

const FilmSlider: React.FC<FilmSliderProps> = ({}) => {
  interface Movie {
      [x: string]: any;
      id: number
      title: string
      yearOfProduction: number,
      rating: number,
      numberOfVoters: number,
      description: string
      imageLink: string
      type: [
      {
      id: number,
      name: string
      },{
        id: number,
        name: string
        }]
  }
  interface ubogieMovie {
    id: any;
    imageLink: string;
    title: string;
    rating: number;
    description: string;
  }
  interface userInfo {
      id:number
      username: string
      lastKnownEmotion: string
  }
  const [username, setUsername] = useState<userInfo>({id:0,username:"XYZ",lastKnownEmotion:"neutral"})
  
  const [moviess, setMoviess] = useState<Movie>()
  const [test, setTest] = useState<number>(0)

 
if(username.id === 0 && username.lastKnownEmotion === "neutral" && username.username === "XYZ"){
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json;odata.metadata=minimal;odata.streaming=true");
  
  var requestOptions1 = {
    method: 'GET',
    headers: myHeaders
  };
  
  fetch("http://localhost:5000/api/User/getUser?username=test", requestOptions1)
    .then(response => response.json())
    .then(result => setUsername(result))
    .catch(error => console.log('error', error));
  }


    if(username && !moviess && test < 1 ) {

      var myHeaders = new Headers();
      myHeaders.append("key", "637766840968febde7076eeb");
      myHeaders.append("Content-Type", "application/json");
      
      var raw = JSON.stringify({
        "emotion": [
          `${username.lastKnownEmotion}`
        ]
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
      };
      
      fetch("http://localhost:9000/ffr/recommendations", requestOptions)
        .then(response => response.json())
        .then(result => setMoviess(result))
        .catch(error => console.log('error', error));
        setTest(test + 1)
     }
 
console.log("pobraneFilmy",moviess)
  

  const movies: ubogieMovie[] = [
    {
      id: 0,
      imageLink: "https://pyxis.nymag.com/v1/imgs/0a8/5d1/3139b0b2fc427ff34fe5394bd1625d8527-2019-critics-joker.rsquare.w700.jpg",
      title: "Joker",
      rating: 4.5,
      description:
        "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.",
    },
    {
      id: 1,
      imageLink: "https://i.postimg.cc/8zkMzLKw/godzilla-king-of-the-monsters.jpg",
      title: "Godzilla: King of the Monsters",
      rating: 3.5,
      description:
        "Members of the crypto-zoological agency Monarch face off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah. When these ancient super-species-thought to be mere myths-rise again, they all vie for supremacy, leaving humanity's very existence hanging in the balance.",
    },
    {
      id: 2,
      imageLink: "https://i.postimg.cc/507HkrqC/abominable.jpg",
      title: "Abominable",
      rating: 4.6,
      description:
        "After discovering a Yeti on the roof of her apartment building, teenage Yi and her two friends embark on an epic quest to reunite the magical creature with his family. But to do so, they must stay one step ahead of a wealthy financier and a determined zoologist who want to capture the beast for their own gain.",
    },
    {
      id: 3,
      imageLink: "https://i.postimg.cc/zf6g76JP/scary-movie.jpg",
      title: "Scary Movie",
      rating: 3.8,
      description:
        'Defying the very notion of good taste, Scary Movie out-parodies the pop culture parodies with a no-holds barred assault on the most popular imageLinks and talked-about moments from recent films, television and commercials. The film boldly fires barbs at the classic scenes from "Scream," "The Sixth Sense," "The Matrix," "I Know What You Did Last Summer" and "The Blair Witch Project," then goes on to mock a whole myriad of teen movie clichés, no matter the genre.',
    },
    {
      id: 4,
      imageLink: "https://i.postimg.cc/qqWNpCFB/endgame.jpg",
      title: "Avengers: Endgame",
      rating: 4.7,
      description:
        "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.",
    },
    {
      id: 5,
      imageLink: "https://i.postimg.cc/4yYKC1BF/matrix.jpg",
      title: "The Matrix",
      rating: 4.7,
      description:
        "Neo (Keanu Reeves) believes that Morpheus (Laurence Fishburne), an elusive figure considered to be the most dangerous man alive, can answer his question -- What is the Matrix? Neo is contacted by Trinity (Carrie-Anne Moss), a beautiful stranger who leads him into an underworld where he meets Morpheus. They fight a brutal battle for their lives against a cadre of viciously intelligent secret agents. It is a truth that could cost Neo something more precious than his life.",
    },
    {
      id: 6,
      imageLink: "https://i.postimg.cc/SNzXDDXn/pulp-fiction.jpg",
      title: "Pulp Fiction",
      rating: 4.6,
      description:
        'Vincent Vega (John Travolta) and Jules Winnfield (Samuel L. Jackson) are hitmen with a penchant for philosophical discussions. In this ultra-hip, multi-strand crime movie, their storyline is interwoven with those of their boss, gangster Marsellus Wallace (Ving Rhames) ; his actress wife, Mia (Uma Thurman) ; struggling boxer Butch Coolidge (Bruce Willis) ; master fixer Winston Wolfe (Harvey Keitel) and a nervous pair of armed robbers, "Pumpkin" (Tim Roth) and "Honey Bunny" (Amanda Plummer).',
    },
    {
      id: 7,
      imageLink: "https://i.postimg.cc/kMH6Qk5r/rise-of-skywalker.jpg",
      title: "Star Wars: The Rise of Skywalker",
      rating: 3.5,
      description:
        "When it's discovered that the evil Emperor Palpatine did not die at the hands of Darth Vader, the rebels must race against the clock to find out his whereabouts. Finn and Poe lead the Resistance to put a stop to the First Order's plans to form a new Empire, while Rey anticipates her inevitable confrontation with Kylo Ren. Warning: Some flashing-lights scenes in this film may affect photosensitive viewers.",
    },
    {
      id: 8,
      imageLink: "https://i.postimg.cc/YCPL3ZRL/kill-bill.jpg",
      title: "Kill Bill",
      rating: 4.4,
      description:
        "A former assassin, known simply as The Bride (Uma Thurman), wakes from a coma four years after her jealous ex-lover Bill (David Carradine) attempts to murder her on her wedding day. Fueled by an insatiable desire for revenge, she vows to get even with every person who contributed to the loss of her unborn child, her entire wedding party, and four years of her life. After devising a hit list, The Bride sets off on her quest, enduring unspeakable injury and unscrupulous enemies.",
    },
    {
      id: 9,
      imageLink: "https://i.postimg.cc/CKLYRxkj/parasite.jpg",
      title: "Parasite",
      rating: 4.5,
      description:
        "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    },
    {
      id: 10,
      imageLink: "https://i.postimg.cc/cHygq3Vs/snatch.jpg",
      title: "Snatch",
      rating: 4.8,
      description:
        "Illegal boxing promoter Turkish (Jason Statham) convinces gangster Brick Top (Alan Ford) to offer bets on bare-knuckle boxer Mickey (Brad Pitt) at his bookie business. When Mickey does not throw his first fight as agreed, an infuriated Brick Top demands another match. Meanwhile, gangster Frankie Four Fingers (Benicio Del Toro) comes to place a bet for a friend with Brick Top's bookies, as multiple criminals converge on a stolen diamond that Frankie has come to London to sell.",
    },
    {
      id: 11,
      imageLink: "https://i.postimg.cc/25VW4rfZ/planet-of-the-apes.jpg",
      title: "Planet of the Apes",
      rating: 3,
      description:
        "Astronaut Leo Davidson whips through space and time to a world where apes and gorillas rule the humans. Captured, he is nurtured by Ari and hunted by General Thade as he leads a rebel group of humans and chimpanzees in search of his downed craft. This is his only hope of escape and, ironically, the planet's only hope of shaking off the tyranny of the gorillas, allowing peaceful humans and chimpanzees to co-exist.",
    },
    {
      id: 12,
      imageLink: "https://i.postimg.cc/0QY69Qs7/i-am-legend-movie-poster.jpg",
      title: "I Am Legend",
      rating: 4.6,
      description:
        "Robert Neville (Will Smith), a brilliant scientist, is a survivor of a man-made plague that transforms humans into bloodthirsty mutants. He wanders alone through New York City, calling out for other possible survivors, and works on finding a cure for the plague using his own immune blood. Neville knows he is badly outnumbered and the odds are against him, and all the while, the infected wait for him to make a mistake that will deliver Neville into their hands.",
    },
    {
      id: 13,
      imageLink: "https://i.postimg.cc/MGjMr53P/casino-royale.jpg",
      title: "Casino Royale",
      rating: 4.7,
      description:
        'After receiving a license to kill, British Secret Service agent James Bond (Daniel Craig) heads to Madagascar, where he uncovers a link to Le Chiffre (Mads Mikkelsen), a man who finances terrorist organizations. Learning that Le Chiffre plans to raise money in a high-stakes poker game, MI6 sends Bond to play against him, gambling that their newest "00" operative will topple the man\'s organization.',
    },
    {
      id: 14,
      imageLink: "https://i.postimg.cc/W19rFtxV/jurassic-park.jpg",
      title: "Jurassic Park",
      rating: 4.8,
      description:
        "In Steven Spielberg's massive blockbuster, paleontologists Alan Grant (Sam Neill) and Ellie Sattler (Laura Dern) and mathematician Ian Malcolm (Jeff Goldblum) are among a select group chosen to tour an island theme park populated by dinosaurs created from prehistoric DNA. While the park's mastermind, billionaire John Hammond (Richard Attenborough), assures everyone that the facility is safe, they find out otherwise when various ferocious predators break free and go on the hunt.",
    },
  ];
  const Movies:Movie[] = [moviess!] 
  
  const tescik:Movie = Movies[0]
  console.log("!!!!!doWyswietlenia",tescik)
  const back = React.useCallback(() => {}, []);
  const [selectedMovieIndex, setSelectedMovieIndex] = useState<
    number | undefined
  >();
  const [isMovieWatched, setIsMovieWatched] = useState(false);
  const togglePassword = () => {
    setIsMovieWatched(!isMovieWatched)
    var formdata = new FormData();
formdata.append("title", Movies[selectedMovieIndex!].title);
formdata.append("isWatched", `${isMovieWatched}`);

var requestOptions = {
  method: 'PATCH',
  body: formdata
};

fetch("http://localhost:5000/api/Movie/addMovieAsWatched?=", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));;
  };
  const handleMovieImageClick = (index: number) => () =>
    setSelectedMovieIndex(index);
if( tescik){
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="styles.css" />
        <script src="script.js" defer></script>
      </head>
      <body>
        <div className="row">
          <div className="header">
            <h3 className="title">{username.username} there are your films, we detect the {username.lastKnownEmotion} emotion</h3>
            <div className="progress-bar"></div>
          </div>
          <div className="container1">
            <button className="handle left-handle">
              <div className="text">&#8249;</div>
            </button>
            <div className="slider">
              {tescik.map((item: { imageLink: string | undefined; }, index: number) => (
                <img onClick={handleMovieImageClick(index)} src={item.imageLink === undefined ? "https://pyxis.nymag.com/v1/imgs/0a8/5d1/3139b0b2fc427ff34fe5394bd1625d8527-2019-critics-joker.rsquare.w700.jpg" :item.imageLink} />
              ))}
            </div>
            <button className="handle right-handle">
              <div className="text">&#8250;</div>
            </button>
          </div>
        </div>
      </body>
      <div className="movies">
        <div className="movieInfo"> </div>

        <text className="movieTitle">
          {!selectedMovieIndex && tescik[0].title}
          {selectedMovieIndex != 0 &&
            selectedMovieIndex &&
            tescik[selectedMovieIndex].title}
        </text>
            
        <text className="movieRating">
          {!selectedMovieIndex && tescik[0].rating + "/ 5"}
          {selectedMovieIndex != 0 &&
            selectedMovieIndex &&
            tescik[selectedMovieIndex].rating + "/ 5"}
        </text>
        <button className="short" onClick={togglePassword}>
            {isMovieWatched ?  <FaEye /> :<FaEyeSlash /> }
          </button>
        <text className="MovieDescription">
          {!selectedMovieIndex && tescik[0].description}
          {selectedMovieIndex != 0 &&
            selectedMovieIndex &&
            tescik[selectedMovieIndex].description}
        </text>
      </div>
      <button>
        <text onClick={back}>
          <button>
            <Link to="/"> Home </Link>
          </button>
          <button>
            <Link to="/mood"> Back </Link>
          </button>
          
        </text>
      </button>
    </html>
  )}
  else{ return <text> Jesteśmy w trakcie wczytywania twoich poleceń, prosimy o chwilę cierpliwości. Treść wkrótce się pojawi</text>}
};
export default FilmSlider;
