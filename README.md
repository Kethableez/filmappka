# Konteneryzacja aplikacji
Aby aplikacja poprawnie działała po uruchomieniu polecenia `docker-compose up --build -d` w folderze głównym należy podjąć następujące kroki:
1. Połączyć się z bazą MSSQL
2. Zaimportować plik `backupV2.bacpac` z folderu `./bak`
3. Po pomyślnym imporcie można dopiero działać z API, które jest zainstalowane na kontenerach - w innym przypadku mogą pojawić się błędy związane z nieodpowiednim połączeniem między api fa-api a bazą danych fa-db

# Movie Recommendation System

Based on the given mood algorithm returns a list of 10 recommended movies to watch.

## Installation

Firstly, download and unpack the test data sets:
- tmdb_5000_credits
- tmdb_5000_movies

In order to run the main logic file, you need to install the following packages on your Python interpreter:
- pandas
- numpy
- from sklearn.metrics.pairwise import cosine_similarity
- from sklearn.feature_extraction.text import CountVectorizer
- from ast import literal_eval
- from sklearn.feature_extraction.text import TfidfVectorizer
- from sklearn.metrics.pairwise import linear_kernel


## Algorithm

### Demographic Filtering

We need a metric to score or rate movie, calculate the score for every movie and sort the scores and recommend the best rated movie to the users.

We use the average ratings of the movie as the score but using this won't be fair enough since a movie with 8.9 average rating and only 3 votes cannot be considered better than the movie with 7.8 as as average rating but 40 votes. So, we'll be using IMDB's weighted rating (wr) which is given as:

![This is an image1](https://image.ibb.co/jYWZp9/wr.png)

where,

- v is the number of votes for the movie;
- m is the minimum votes required to be listed in the chart;
- R is the average rating of the movie;
- C is the mean vote across the whole report.


### Content Based Filtering

**Plot description based Recommender**

We will compute pairwise similarity scores for all movies based on their plot descriptions and recommend movies based on that similarity score.
We will be using the cosine similarity to calculate a numeric quantity that denotes the similarity between two movies. We use the cosine similarity score since it is independent of magnitude and is relatively easy and fast to calculate. Mathematically, it is defined as follows:

![This is an image2](https://discuss.pytorch.org/uploads/default/original/2X/d/d035bac4a41883ae6fb5e58b9831800bb3e65479.png)


**Credits, Genres and Keywords Based Recommender**

We are going to build a recommender based on the following metadata: the 3 top actors, the director, related genres and the movie plot keywords.

## Methods

```
def weighted_rating(x: {__getitem__},
                    m: float | Series | None = m,
                    C: Any = C) -> float
 
 
def get_recommendations(title: Any,
                        cosine_sim: {__getitem__} = cosine_sim) -> Any
 
 
def get_director(x: {__iter__}) -> Any
 
 
def get_list(x: Any) -> list
 
 
def clean_data(x: Any) -> list[str] | str


def create_soup(x: {__getitem__}) -> str
 
 
```
