const ENVSETTINGS = require("../settings");

const CONNECTION = {
    host     : ENVSETTINGS.host,
    user     : ENVSETTINGS.user,
    password : ENVSETTINGS.password,
    port : ENVSETTINGS.port,
    database: ENVSETTINGS.database,
  }

  module.exports = CONNECTION;