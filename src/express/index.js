'use strict';

const path = require(`path`);
const express = require(`express`);
const chalk = require(`chalk`);
const routers = require(`./router`);

const DEFAULT_PORT = process.env.PORT || 8080;

const app = express();

app.set(`views`, path.join(__dirname, `./templates`));
app.set(`view engine`, `pug`);

app.use(express.static(path.resolve(__dirname, `public`)));

Object.keys(routers).forEach((key) => {
  app.use(key, routers[key]);
});

app.use((err, req, res, next) => {
  console.log(chalk.red(err.message));
  res
    .status(500)
    .render(`pages/errors/500`);
  next(err);
});

app.listen(DEFAULT_PORT, () => {
  console.log(`"Сервер запущен на порту: ${DEFAULT_PORT}`);
});
