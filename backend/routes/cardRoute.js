import express from 'express';
import Card from '../models/cardModel';

const router = express.Router();


router.post('/register', async (req, res) => {
  const card = new Card({
    cardNumber: req.body.cardNumber,
    validDate: req.body.validDate,
    cardName: req.body.cardName,
    ccv: req.body.ccv,
  });
  const newCard = await card.save();
  if (newCard) {
    res.send({
      _id: newCard.id,
      cardNumber: newCard.cardNumber,
      validDate: newCard.validDate,
      cardName: newCard.cardName,
      ccv: newCard.ccv,
    });
  } else {
    res.status(401).send({ message: 'Invalid Card Data.' });
  }
});

export default router;
