# https://hub.docker.com/_/node
FROM node:latest

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
RUN yarn global add serve
USER node
COPY --chown=node:node ./SnapShot/package.json ./SnapShot/yarn.lock ./
RUN yarn install
COPY --chown=node:node ./SnapShot .
CMD yarn build && serve -s -n ./build
