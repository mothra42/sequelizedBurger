module.exports = function(sequelize, DataTypes)
{
  var Customer = sequelize.define("Customer", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    numEaten: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  },
{
  timestamps: false
});
  Customer.associate = function(models)
  {
    Customer.hasMany(models.Burger, {
      onDelete: "cascade"
    });
  }
  return Customer;
}
