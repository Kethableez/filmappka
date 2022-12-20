#!/usr/bin/env bash

gunicorn wsgi:app --bind 0.0.0.0:6666 --log-level=debug --workers=4