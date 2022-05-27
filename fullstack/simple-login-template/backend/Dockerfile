FROM node:17

WORKDIR /app

COPY . .

RUN npm install nodemon -g && npm install -g npm@8.11.0 && npm install

ENTRYPOINT nodemon src/app.js