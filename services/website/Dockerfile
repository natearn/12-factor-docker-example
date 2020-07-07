# https://hub.docker.com/_/node
FROM node:latest

RUN yarn global add serve
RUN mkdir -p /website
WORKDIR /website
COPY ./SnapShot/package.json ./SnapShot/yarn.lock ./
RUN yarn install
COPY ./SnapShot .
CMD yarn build && serve -s -n ./build
