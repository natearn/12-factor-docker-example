# https://hub.docker.com/_/node
FROM node:latest

# TODO: create and serve the optimized build

COPY ./SnapShot /SnapShot
WORKDIR /SnapShot
RUN yarn install
CMD yarn start
