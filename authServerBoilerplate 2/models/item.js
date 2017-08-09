const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PointSchema = new Schema({
  type: { type: String, default: 'Point'},
  coordinates: { type: [Number], index: '2dsphere'}
});



const ItemSchema = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  images: {
    type: Schema.Types.ObjectId,
    ref: 'image'
  },
  price: {
    type: Number
  },
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  buyer: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }],
  time: {
    type: String
  },
  date: {
    type: String
  },
  geometry: PointSchema
});

ItemSchema.virtual('itemPending').get(function() {
  if (this.buyer.length > 0) {
    return true;
  } else {
    return false;
  }
});

const Item = mongoose.model('item', ItemSchema);

module.exports = Item;
