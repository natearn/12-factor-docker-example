# https://hub.docker.com/_/node
FROM node:latest

COPY ./SnapShot /SnapShot
WORKDIR /SnapShot
RUN yarn install
CMD yarn start
