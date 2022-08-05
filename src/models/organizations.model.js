// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const organizations = sequelizeClient.define(
    "organizations",
    {
      _id: {
        type: Sequelize.UUID,
        unique: true,
        primaryKey: true,
        isUUID: 4,
        defaultValue: Sequelize.UUIDV4,
      },
      ownerId: {
        type: Sequelize.UUID,
        unique: true,
        isUUID: 4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
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
  organizations.associate = function (models) {
    const { users } = models;
    // organizations.belongsTo(users); // Will add userId to users model
    organizations.hasMany(users);
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return organizations;
};
