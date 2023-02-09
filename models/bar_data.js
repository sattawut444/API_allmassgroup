'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  bar.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull:false,
        comment: "รหัส",
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull:true,
        comment: "ชื่อ",
    },
    data: {
        type: DataTypes.TEXT,
        allowNull:true,
        comment: "บทความ",
    },
    audience: {
        type: DataTypes.INTEGER,
        allowNull:true,
        comment: "ยอดวิว",
    },
    image: {
        type: DataTypes.STRING,
        allowNull:true,
        comment: "รูป",
    },
    create_time: {
        type: DataTypes.DATE,
        allowNull:true,
        comment: "เวลาสร้าง",
    },
    update_time: {
        type: DataTypes.DATE,
        allowNull:true,
        comment: "เวลาอัพเดท",
    },
    }, {
      sequelize,
      tableName: 'bar',
      collateName: 'bar',
      timestamps: false
    });
    return bar;
};