const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.PENGGUNA_DB,        // <-- Diubah ke variabel Vercel lu
    password: process.env.KATA_SANDI_DB,  // <-- Diubah ke variabel Vercel lu
    database: process.env.NAMA_DB         // <-- Diubah ke variabel Vercel lu
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