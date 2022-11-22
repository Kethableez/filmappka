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
