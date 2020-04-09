#base image based in node.js
FROM node:current-slim

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3002

CMD [ "npm","start"]