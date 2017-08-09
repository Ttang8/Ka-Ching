const Item = require('../models/item');

module.exports = {

  index(req, res, next) {
    const { lng, lat } = req.query;

    Item.geoNear(
      { type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)]},
      { spherical: true, maxDistance: 100000000}
    )
      .then(items => {
        res.send(items);
      })
      .catch(next);
  },

  create(req, res, next) {
    const itemProps = req.body;

    Item.create(itemProps)
      .then((item) => res.send(item))
      .catch(next);
  },

  edit(req, res, next) {
    const itemId = req.params.id;
    const itemProps = req.body;

    Item.findByIdAndUpdate({ _id: itemId}, itemProps)
      .then(() => Item.findById({ _id: itemId}))
      .then((item) => res.send(item))
      .catch(next);
  },

  delete(req, res, next) {
    const itemId = req.params.id;

    Item.findByIdAndRemove({ _id: itemId})
      .then((item) => res.status(204).send(item))
      .catch(next);
  }
};
