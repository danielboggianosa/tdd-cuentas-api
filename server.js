const app = require("./app");
const config = require('./config')

app.listen(config.appPort, () => {
  console.log(`Example app listening on port ${config.appPort}!`);
});