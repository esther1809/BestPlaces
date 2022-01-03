'use strict'
const express = require('express');
const router = express.Router();
const neighboord = require('../models/neighboord');

// GET - get all people from db
router.get('/', async (req, res) => {
    console.log("get all neighboords");
    const result = await neighboord.find().exec();
    res.json(result);
})

//GET - get one document by id
router.get('/:id',async(req, res) => {
    console.log(`the neighboord id is :${req.params.id}`);
    const document = await neighboord.findById(req.params.id).exec();
    res.json(document);
})

//POST - add new document
router.post('/',async (req, res) => {
    const document = new neighboord({
        name: 'Bet Vegan',
        cityid: '61d2f8abd5cb89914c6b60ee'
    });
 
    // save model to database
    const result = await document.save();
    console.log(`${result.name} saved to neighboords collection. id: ${result._id}`);
    res.json(result);
});

//DELETE - delete document by the sent id
router.delete('/:id', async(req, res) =>  {
    const result = await neighboord.deleteOne({ id: req.params.id });
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
    res.json(result);
});

//PUT - update document by sent id
router.put('/:id', async (req, res) => {
    const result = await neighboord.updateOne({ _id: req.params.id }, { $set: {npseudoname: 'updated100',password:'aaa'} }, {upsert: false});
    console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
    res.json(result);
});

//BY NAME
// GET - get document by name
router.get('/byname/:name',async(req, res) => {
    console.log(`the neighboord id is :${req.params.name}`)
    const document = await neighboord.find({name:req.params.name}).exec();
    res.json(document);
})

//DELETE - delete documents by the sent name
router.delete('/byname/:name', async(req, res) =>  {
    const result = await neighboord.deleteMany({ name: req.params.name });
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
    res.json(result);
});


module.exports = router;
