FROM node:12

FROM mongo:4.2.0

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install nodemon -g --quiet
COPY . .

EXPOSE 4000

CMD nodemon -L --watch . server.js 