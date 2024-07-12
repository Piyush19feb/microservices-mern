const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  database: "ms_mern_cart_service_db",
  user: "root",
  password: "manager",
});

module.exports = {
  pool,
};
