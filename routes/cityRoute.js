'use strict'
const express = require('express');
const router = express.Router();
const city = require('../models/city');

// GET - get all people from db
router.get('/', async (req, res) => {
    console.log("get all cities");
    const result = await city.find().exec();
    res.json(result);
})

//GET - get one document by id
router.get('/:id',async(req, res) => {
    console.log(`the city id is :${req.params.id}`);
    const document = await city.findById(req.params.id).exec();
    res.json(document);
})

//POST - add new document
router.post('/',async (req, res) => {
    const document = new city({
        name: 'Bet Vegan',
        areaid: '61d2f81348885021d50ba5d3'
    });
 
    // save model to database
    const result = await document.save();
    console.log(`${result.name} saved to cities collection. id: ${result._id}`);
    res.json(result);
});

//DELETE - delete document by the sent id
router.delete('/:id', async(req, res) =>  {
    const result = await city.deleteOne({ id: req.params.id });
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
    res.json(result);
});

//PUT - update document by sent id
router.put('/:id', async (req, res) => {
    const result = await city.updateOne({ _id: req.params.id }, { $set: {name: 'Jerusalem'} }, {upsert: false});
    console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
    res.json(result);
});

//BY NAME
// GET - get document by name
router.get('/byname/:name',async(req, res) => {
    console.log(`the city id is :${req.params.name}`)
    const document = await city.find({name:req.params.name}).exec();
    res.json(document);
})

//DELETE - delete documents by the sent name
router.delete('/byname/:name', async(req, res) =>  {
    const result = await city.deleteMany({ name: req.params.name });
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
    res.json(result);
});


module.exports = router;
