const db = require("../models");
const Usuario = db.usuarios;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  
  const usuario = {
      nome: req.body.nome,
      email: req.body.email,
      telefone: req.body.telefone,
      status: req.body.status ? req.body.status : false,
      senha: req.body.senha
  };

  Usuario.create(usuario)
  .then(data => {
      res.send(data);
  })
  .catch(err => {
      res.status(500).send({message: err.message});
  });
};

exports.findAll = (req, res) => {
    const nome = req.query.nome;
    var condicao = nome ? { nome: { [Op.like]: `%${nome}%` } } : null;

    Usuario.findAll({ where: condicao })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({message: err.message});
    });
  
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Usuario.findById(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({message: err.message});
    });
};  

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Usuario.update(req, body, {where: {id: id}})
    .then(num => {
        if(num == 1) {
            res.send({message: 'Usuário alterado com sucesso!'});
        } else {
            res.send({message: 'Não foi possível alterar o usuário!'});
        }
    })
    .catch(err => {
        res.status(500).send({message: err.message});
    });

  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Usuario.destroy({ where: {id: id}})
    .then(num => {
        if(num == 1) {
            res.send({message: 'Usuário deletado com sucesso!'});
        } else {
            res.send({message: 'Não foi possível deletar o usuário!'});
        }
    })
    .catch(err => {
        res.status(500).send({message: err.message});
    });
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Usuario.destroy({ where: {}, truncate: false})
  .then(nums => {
      res.send({message: 'Usuários deletados com sucesso!'})
  })
  .catch(err => {
    res.status(500).send({message: err.message});
});

};

// Find all published Tutorials
exports.findAllAtivos = (req, res) => {
  Usuario.findAll({ where: { status: true } })
  .then(data => {
      res.send(data);
  })
  .catch(err => {
    res.status(500).send({message: err.message});
});
};