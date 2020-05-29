'use strict';

const express = require(`express`);
const chalk = require(`chalk`);
const routers = require(`./router`);
const {
  parseCommandParam,
} = require(`../../../utils/utils`);

const DEFAULT_PORT = process.env.PORT || 3000;

const startApp = (port) => {
  const app = express();

  app.use(express.json());

  for (let [key, router] of Object.entries(routers)) {
    app.use(key, router);
  }

  app.use((err, req, res, next) => {
    console.log(chalk.red(err.message));
    res
      .status(500);
    next(err);
  });

  app.listen(port, () => {
    console.log(chalk.green(`Сервер запущен на порту ${port}`));
  });
};

const run = (input) => {
  let port = DEFAULT_PORT;
  const userPort = parseCommandParam(input);
  if (!isNaN(userPort)) {
    port = userPort;
  }
  startApp(port);
};

module.exports = {
  name: `--server`,
  run
};

// run([3000]); // для отладки
