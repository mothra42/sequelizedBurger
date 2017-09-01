module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },
{
  timestamps: false
});
  Burger.associate = function(models)
  {
    Burger.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false
      }
    });
  }
  return Burger;
};
