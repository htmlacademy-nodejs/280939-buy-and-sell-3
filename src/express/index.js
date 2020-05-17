'use strict';

const path = require(`path`);
const express = require(`express`);
const routers = require(`./router`);

const DEFAULT_PORT = 8080;

const app = express();

app.set(`views`, path.join(__dirname, `./templates`));
app.set(`view engine`, `pug`);

Object.keys(routers).forEach((key) => {
  app.use(key, routers[key]);
});

app.listen(DEFAULT_PORT, () => {
  console.log(`"Сервер запущен на порту: ${DEFAULT_PORT}`);
});
