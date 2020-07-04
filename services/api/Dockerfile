# https://hub.docker.com/_/node
FROM node:latest

COPY . /api
WORKDIR /api
RUN yarn install
CMD yarn start
