FROM python:3.9.0-slim as api

RUN apt-get update && apt-get install -y build-essential cmake protobuf-compiler ffmpeg libsm6 libxext6

COPY requirements/lib.txt requirements/lib.txt

RUN pip install -U pip && pip install -r requirements/lib.txt

COPY ./weights /root/.deepface/weights
COPY ./faceapi /api/faceapi
COPY ./utils /api/utils
COPY ./bin /app/bin
COPY app.py /api/app.py
COPY wsgi.py /api/wsgi.py
WORKDIR /api

EXPOSE 5000

ENTRYPOINT ["bash", "/app/bin/run.sh"]