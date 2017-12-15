const express = require('express');
const router = express.Router();

const Food = require('../models/food.js')

//index
router.get('/', async (req, res) => {
  try{
    const foods = await Food.find().populate();
    res.status(200).json(foods);
  }catch (err){
  console.log(err);
  res.status(400).json({ err: err.message });
    }
  })

//create
  router.post('/', async (req, res)  => {
    try {
       const food = await Food.create(req.body);
       res.status(200).json(food);
    } catch (err) {
      console.log(err);
      res.status(400).json({ err: err.message});
    }
  });

//delete
  router.delete('/:id', async (req, res) => {
    try{
      const food = await Food.findByIdAndRemove(req.params.id);
      res.status(200).json(food);
    } catch (err){
      res.status(400).json({ err: err.message });
    }
  });

  //update
  router.put('/:id', async (req, res) => {
    try {
      const food = await Food.findByIdAndUpdate(req.params.id, req.body, {new: true});
      res.status(200).json(food)
    } catch (err) {
      console.log(err);
      res.status(400).json({ err: err.message });
    }
  });




module.exports = router;
