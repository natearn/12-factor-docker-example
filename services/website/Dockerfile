# https://hub.docker.com/_/node
FROM node:latest

RUN yarn global add serve
COPY ./SnapShot /SnapShot
WORKDIR /SnapShot
RUN yarn install
RUN yarn build
CMD serve -s -n ./build
