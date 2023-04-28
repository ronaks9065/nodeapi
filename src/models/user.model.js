module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      message: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };
  