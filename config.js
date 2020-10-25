module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "notASecret!",
  },
  mysql: {
    host: process.env.MYSQL_HOST || "remotemysql.com",
    user: process.env.MYSQL_USER || "3xn4QJYhZJ",
    password: process.env.MYSQL_PASS || "RMeZpgbiHY",
    database: process.env.MYSQL_DB || "3xn4QJYhZJ",
  },
};
