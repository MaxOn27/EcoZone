module.exports = (sequelize, Sequelize) => {
    const Advert = sequelize.define("advert", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
          title: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          price: {
              type: Sequelize.NUMERIC(10, 2),
              allowNull: true,
            },
          userId : {
              type : Sequelize.INTEGER,
          },
          city: {
              type: Sequelize.STRING,
              allowNull: false,
          },
          address: {
              type: Sequelize.STRING,
              allowNull: false,
          },
          description: {
              type: Sequelize.TEXT,
              allowNull: false
          },
          photoURL: {
            allowNull: true,
            type: Sequelize.STRING
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          publishedAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          published: {
              allowNull: false,
              type: Sequelize.BOOLEAN,
            }
    });
  
    return Advert;
  };