const Item = require("../models/item");

module.exports = {
  allItems(req, res, next) {
    Item.find({})
      .then((items) => res.send(items))
      .catch(next);
  },

  indexItems(req, res, next) {
    const { lng, lat } = req.query;

    Item.geoNear(
      { type: "Point", coordinates: [parseFloat(lng), parseFloat(lat)] },
      { spherical: true, maxDistance: 8000 }
    )
      .then(items => {
        res.send(items);
      })
      .catch(next);
  },

  indexItem(req, res, next) {
    const itemId = req.params.id;

    Item.findOne({ _id: itemId }).then(user => res.send(user)).catch(next);
  },

  categorizeItem(req, res, next) {
    const itemCategory = req.params.category;

    Item.find({category: itemCategory})
      .then(items => res.send(items))
      .catch(next);
  },

  createItem(req, res, next) {
    const itemProps = req.body;

    Item.create(itemProps)
      .then(item => res.send(item))
      .catch(next);
  },

  editItem(req, res, next) {
    const itemId = req.params.id;
    const itemProps = req.body;

    Item.findByIdAndUpdate({ _id: itemId }, itemProps)
      .then(() => Item.findById({ _id: itemId }))
      .then(item => res.send(item))
      .catch(next);
  },

  deleteItem(req, res, next) {
    const itemId = req.params.id;

    Item.findByIdAndRemove({ _id: itemId })
      .then(item => res.status(204).send(item))
      .catch(next);
  }
};
