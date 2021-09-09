const produto = (sequelize, DataTypes) => {
  const Produto = sequelize.define(
    'Produto',
    {
      nome: {
        type: DataTypes.STRING,
      },
      preco: {
        type: DataTypes.DOUBLE,
      },
    },
    {
      tableName: 'produto',
      timestamps: false,
    }
  );

  return Produto;
};

module.exports = produto;
