import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
  cardNumber: { type: String, required: true },
  validDate: { type: String, required: true },
  cardName: { type: String, required: true },
  ccv: { type: String, required: true },
});

const cardModel = mongoose.model('Card', cardSchema);

export default cardModel;
