const { DataTypes } = require('sequelize');
const sequelize = require('../../utils/config.js');

const User = sequelize.define('user', {
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // disarankan agar email tidak duplikat
    validate: {
      isEmail: true,
    }
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  }
}, {
  freezeTableName: true
});

User.sync(); // bisa diganti dengan sync({ alter: true }) saat pengembangan
module.exports = User;
