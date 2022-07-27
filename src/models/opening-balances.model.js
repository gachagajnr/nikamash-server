// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const openingBalances = sequelizeClient.define(
    "opening_balances",
    {
      _id: {
        type: Sequelize.UUID,
        unique: true,
        primaryKey: true,
        isUUID: 4,
        defaultValue: Sequelize.UUIDV4,
      },
      mpesa: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cash: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      day: {
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
  openingBalances.associate = function (models) {
    const { organizations } = models;
    openingBalances.belongsTo(organizations); // Will add userId to users model

    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };;

  return openingBalances;
};
