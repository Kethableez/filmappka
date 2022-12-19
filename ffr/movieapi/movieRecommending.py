import json
import pandas as pd
import requests
# Import TfIdfVectorizer from scikit-learn
from sklearn.feature_extraction.text import TfidfVectorizer
# Import linear_kernel
from sklearn.metrics.pairwise import linear_kernel


# Database port
localhost = "localhost:5001"
api_url = "https://%s/api/Movie/getMoviesBasedOnTypeAndKeywords" % localhost


# Function that takes in movie title as input and outputs most similar movies
def get_recommendations(df2, indices, title, cosine_sim):
    # Get the index of the movie that matches the title
    idx = indices[title]

    # Get the pairwise similarity scores of all movies with that movie
    sim_scores = list(enumerate(cosine_sim[idx]))

    # Sort the movies based on the similarity scores
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

    # Get the scores of the 9 most similar movies
    sim_scores = sim_scores[0:9]

    # Get the movie indices
    movie_indices = [i[0] for i in sim_scores]

    # Deleting column id
    df2.drop('id', axis=1, inplace=True)
    # Placeholder for movie poster image link
    df2['image'] = 'https://xl.movieposterdb.com/05_07/1999/0120689/xl_34970_0120689_e3f4a87d.jpg?v=2022-05-21%2016:12:26'

    # Return the top 9 most similar movies
    return df2.iloc[movie_indices]


def recommendMovies(mood):

    if mood == 'angry':
        movies_to_mood = {
            "typeIds": [
                7
            ],
            "keywordIds": [
                216
            ]
        }

    elif mood == 'disgust':
        movies_to_mood = {
            "typeIds": [
                7
            ],
            "keywordIds": [
                216
            ]
        }

    elif mood == 'happy':
        movies_to_mood = {
            "typeIds": [
                1
            ],
            "keywordIds": [
                216
            ]
        }

    elif mood == 'fear':
        movies_to_mood = {
            "typeIds": [
                7
            ],
            "keywordIds": [
                216
            ]
        }

    elif mood == 'sad':
        movies_to_mood = {
            "typeIds": [
                2
            ],
            "keywordIds": [
                216
            ]
        }

    elif mood == 'surprise':
        movies_to_mood = {
            "typeIds": [
                1
            ],
            "keywordIds": [
                216
            ]
        }

    elif mood == 'neutral':
        movies_to_mood = {
            "typeIds": [
                1
            ],
            "keywordIds": [
                1
            ]
        }

    response = requests.post(api_url, json=movies_to_mood, verify=False)
    movie_list = response.json()
    pd.options.display.max_columns = None
    pd.options.display.width = None
    df2 = pd.DataFrame.from_dict(movie_list)
    df2.columns = ['id', 'title', 'yearOfProduction', 'rating', 'numberOfVoters', 'description', 'type']
    # Deleting column type
    df2.drop('type', axis=1, inplace=True)

    C = df2['rating'].mean()
    m = df2['numberOfVoters'].quantile(0.9)
    q_movies = df2.copy().loc[df2['numberOfVoters'] >= m]

    def weighted_rating(x, m=m, C=C):
        v = x['rating']
        R = x['numberOfVoters']
        # Calculation based on the IMDB formula
        return (v / (v + m) * R) + (m / (m + v) * C)

    # Placeholder for movie poster image link
    q_movies['image'] = 'https://xl.movieposterdb.com/05_07/1999/0120689/xl_34970_0120689_e3f4a87d.jpg?v=2022-05-21%2016:12:26'
    # Define a new feature 'score' and calculate its value with `weighted_rating()`
    q_movies['score'] = q_movies.apply(weighted_rating, axis=1)
    # Sort movies based on score calculated above
    q_movies = q_movies.sort_values('score', ascending=False)
    # Print the top 9 movies
    top_movies = q_movies[['title', 'yearOfProduction', 'rating', 'description', 'image']].head(9)
    # Deleting column numberOfVoters
    df2.drop('numberOfVoters', axis=1, inplace=True)

    # Define a TF-IDF Vectorizer Object. Remove all english stop words such as 'the', 'a'
    tfidf = TfidfVectorizer(stop_words='english')
    # Replace NaN with an empty string
    df2['description'] = df2['description'].fillna('')
    # Construct the required TF-IDF matrix by fitting and transforming the data
    tfidf_matrix = tfidf.fit_transform(df2['description'])
    # Output the shape of tfidf_matrix
    # print(tfidf_matrix.shape)

    cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)
    # Construct a reverse map of indices and movie titles
    indices = pd.Series(df2.index, index=df2['title']).drop_duplicates()

    if mood == 'angry':
        recommendations = get_recommendations(df2, indices, 'The Silence of the Lambs', cosine_sim)
    elif mood == 'disgust':
        recommendations = get_recommendations(df2, indices, 'World War Z', cosine_sim)
    elif mood == 'fear':
        recommendations = get_recommendations(df2, indices, 'The Cabin in the Woods', cosine_sim)
    elif mood == 'happy':
        recommendations = get_recommendations(df2, indices, 'The Secret Life of Walter Mitty', cosine_sim)
    elif mood == 'sad':
        recommendations = get_recommendations(df2, indices, 'The Green Mile', cosine_sim)
    elif mood == 'surprise':
        recommendations = get_recommendations(df2, indices, 'The Wizard of Oz', cosine_sim)
    elif mood == 'neutral':
        recommendations = top_movies

    result = recommendations.to_json(orient="values")
    parsed = json.loads(result)
    return json.dumps(parsed, indent=4)
