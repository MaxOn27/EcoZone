const db = require("../models/advert_index");
const Advert = db.adverts;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const advert = {
    title: req.body.title,
    price: req.body.price,
    userId: req.body.userId,
    city: req.body.city,
    address: req.body.address,
    description: req.body.description,
    photoURL: req.body.photoURL,
    createdAt: Date.now(),
    publishedAt: Date.now(),
    published: req.body.published
  };

  Advert.create(advert)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Advert."
      });
    });
};

exports.findAll = (req, res) => {


  Advert.findAll({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving adverts."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Advert.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Advert with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Advert.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Advert was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Advert with id=${id}. Maybe Advert was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Advert with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Advert.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Advert was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Advert with id=${id}. Maybe Advert was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Advert with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Advert.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Adverts were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all adverts."
      });
    });
};

exports.findAllPublished = (req, res) => {
    Advert.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving adverts."
      });
    });
};