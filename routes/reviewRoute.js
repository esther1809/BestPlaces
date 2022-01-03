'use strict'
const express = require('express');
const router = express.Router();
const review = require('../models/review');

// GET - get all people from db
router.get('/', async (req, res) => {
    console.log("get all reviews");
    const result = await review.find().exec();
    res.json(result);
})

//GET - get one document by id
router.get('/:id',async(req, res) => {
    console.log(`the review id is :${req.params.id}`);
    const document = await review.findById(req.params.id).exec();
    res.json(document);
})

//POST - add new document
router.post('/',async (req, res) => {
    const document = new review({
        reviewtext: 'the best place to live because...',
        neighboordid:'61d2faefd44094e5c8bba2de',
        userid:'61d2f7e0d21051d0cb909ac4'
    });
 
    // save model to database
    const result = await document.save();
    console.log(`${result.name} saved to reviews collection. id: ${result._id}`);
    res.json(result);
});

//DELETE - delete document by the sent id
router.delete('/:id', async(req, res) =>  {
    const result = await review.deleteOne({ id: req.params.id });
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
    res.json(result);
});

//PUT - update document by sent id
router.put('/:id', async (req, res) => {
    const result = await review.updateOne({ _id: req.params.id }, { $set: {npseudoname: 'updated100',password:'aaa'} }, {upsert: false});
    console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
    res.json(result);
});

//BY NAME
// GET - get document by name
router.get('/byname/:name',async(req, res) => {
    console.log(`the review id is :${req.params.name}`)
    const document = await review.find({name:req.params.name}).exec();
    res.json(document);
})

//DELETE - delete documents by the sent name
router.delete('/byname/:name', async(req, res) =>  {
    const result = await review.deleteMany({ name: req.params.name });
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
    res.json(result);
});


module.exports = router;
