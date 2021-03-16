module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {
      nome: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      telefone: {
          type: Sequelize.STRING
      },
      email: {
          type: Sequelize.STRING
      },
      senha: {
          type: Sequelize.STRING
      }
      
    });
  
    return Usuario;
  };