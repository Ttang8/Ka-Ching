const Item = require('../models/item');

module.exports = {
  index(req, res, next) {
    const { lng, lat } = req.query;

    Item.geoNear(
      { type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)]},
      { spherical: true, maxDistance: 8000}
    )
      .then(items => res.send(items))
      .catch(next);
  }
};
