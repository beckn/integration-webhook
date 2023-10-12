#!/bin/bash

cp Dockerfile-webhook ~/beckn-sandbox-webhook/Dockerfile
cd ~/beckn-sandbox-webhook/
docker build -t webhook-api .
docker stop webhook-api && docker rm webhook-api
docker run --name webhook-api -it -d --network host webhook-api:latest
