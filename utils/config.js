// Import Sequelize dulu
const { Sequelize } = require('sequelize');

// Buat instance sequelize sesuai kondisi env var
const sequelize = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL, {
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
    })
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASS,
      {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
      }
    );

// Export supaya bisa dipakai di file lain
module.exports = sequelize;
