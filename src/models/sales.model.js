// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const sales = sequelizeClient.define(
    "sales",
    {
      _id: {
        type: Sequelize.UUID,
        unique: true,
        primaryKey: true,
        isUUID: 4,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sellingPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cash: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mpesa: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      day: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      units: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bp: {
        type: DataTypes.NUMERIC,
        allowNull: true,
      },
      profit: {
        type: DataTypes.NUMERIC,
        defaultValue: 0,
      },
      mode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      total: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        },
      },
    }
  );

  // eslint-disable-next-line no-unused-vars
  sales.associate = function (models) {
    const { organizations } = models;
    sales.belongsTo(organizations); // Will add userId to users model

    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };;

  return sales;
};
