FROM node:18.14.0-alpine3.17

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
COPY .env ./.env
RUN npm run build

RUN npm i -g pm2
EXPOSE 3005
CMD [ "pm2-runtime", "ecosystem.config.js" ]
