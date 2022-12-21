# [FFR] Dokumentacja API

## Uruchomienie

#### Wymagania wsępne:
* Docker
* Docker compose

#### Pierwsze uruchomienie
Aby uruchomić aplikację po raz pierwszy należy [pobrać ten plik](https://drive.google.com/drive/folders/1tVttV-35EQdYiGzxYxXV4sIhkgb-vNzG?usp=sharing) a następnie wypadkować jego zawartość do folderu `/ffr/weights` 

Następnie w folderze `/ffr` należy wywołać komendę:
```
$ docker-compose up --build -d
```
Spowoduje to uruchomienie z instalacją wszystkich niezbędnych składników do działania REST API.

#### Kolejne uruchomienie
Każde kolejne uruchomienie wymaga wywołania komendy w folderze `/ffr`:
```
$ docker-compose up -d
```

#### Zatrzymanie aplikacji
Aby zatrzymać aplikację należy wywołać komendę:
```
$ docker stop ffr-api ffr-db
```

---

## Endpointy

### Enkodowanie twarzy użytkownika

```http
  POST /ffr/encode
```
#### Form Data
| Key       | Type     | Description                                 |
| :-------- | :------- | :-------------------------                  |
| `file`    | `File`   | **Required**. Face image to encode          |
| `label`   | `string` | **Required**. User email to label encodings |

#### Response:
* 200:
    ```
    { 
      "message": "[FFR - ENC] Encoded with success"
    }        
    ``` 
* 400:
    ```
    { 
      "message": "[FFR - ENC] No encodings found"
    }        
    ``` 

* 401:
    ```
    { 
      "message": "Invalid or empty API KEY"
    }        
    ``` 

Aby model dobrze rozpoznawał twarze użytkowników na początku należy przekazać zdjęcie użytkownika do zakodowania. Zakodowana twarz jest łączona z emailem użytkownika i zapisywana w bazie.  
Ma to na celu późniejsze porównywanie zdjęcia użytkownika ze wzorcem w celu rozpoznania go.  
**UWAGA**: W bazie nie są zapisywane zdjęcia użytkowników tylko zestaw cyfr odpowiadający zakodowanej twarzy.

---

### Rozpoznawanie twarzy użytkownika

```http
  POST /ffr/recognise
```

#### Form Data
| Key       | Type     | Description                                 |
| :-------- | :------- | :-------------------------                  |
| `file`    | `File`   | **Required**. Face image to encode          |

#### Response:
* 200:
    ```
    { 
      "results": [
        "johny-depp@ffr.com",
        "john-doe@ffr.com"
      ]
    }        
    ``` 
* 400:
    ```
    { 
      "message": "[FFR - REC] No face were recognised'"
    }        
    ``` 

* 401:
    ```
    { 
      "message": "Invalid or empty API KEY"
    }        
    ``` 
---

### Enkodowanie twarzy użytkownika

```http
  POST /ffr/emotion
```

#### Form Data
| Key       | Type     | Description                                 |
| :-------- | :------- | :-------------------------                  |
| `file`    | `File`   | **Required**. Face image to encode          |

#### Response:
* 200:
    ```
    { 
      "angry": 7.603e-14,
      "disgust": 2.13e-26,
      "fear": 1.03e-14,
      "happy": 100.0,
      "sad": 2.205e-10
      "surprise": 7.10e-13
      "neutral": 4.48e-08
    }        
    ``` 
* 400:
    ```
    { 
      "message": "[FFR - MDT] No face were recognised'"
    }        
    ``` 

* 401:
    ```
    { 
      "message": "Invalid or empty API KEY"
    }        
    ``` 

---

### Rekomendacje filmów


```http
  POST /ffr/emotion
```

#### Body
  ```
  {
    "emotion": "string";
  }
  ```

#### Response:
* 200:
    ```
    ???        
    ```

---

### Health Check

```http
  GET /ffr/health
```
