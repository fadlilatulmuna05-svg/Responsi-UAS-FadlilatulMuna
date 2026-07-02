const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: process.env.HOST_ADDON_MYSQL,
    user: process.env.PENGGUNA_ADDON_MYSQL,
    password: process.env.KATA_SANDI_ADDON_MYSQL,
    database: process.env.MYSQL_ADDON_DB,
    port: process.env.PORT_ADDON_MYSQL || 3306
});

connection.connect((err) => {
    if (err) {
        console.log("❌ Gagal terhubung ke MySQL");
        console.log(err);
        return;
    }

    console.log("✅ Berhasil terhubung ke MySQL");
});

module.exports = connection;