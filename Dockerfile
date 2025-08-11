FROM node:16.15.0-alpine3.15

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build
WORKDIR /usr/src/app

RUN npm i -g pm2
EXPOSE 3005
RUN mkdir -p /usr/src/app/logs
CMD [ "npm", "run", "start" ]
