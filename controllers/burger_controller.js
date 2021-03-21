const express = require('express');
const burger = require('../models/burger');
const router = express.Router();

//this shows all available burgers
router.get('/', (req, res) => {

    burger.selectAll((data) => {
        const handlebarsObj = {
            burgers: data
        };
        console.log(handlebarsObj);
        res.render('index', handlebarsObj);
    });
});

//this adds the user's burger to the list
router.post('/api/burgers', (req, res) => {
    burger.insertOne([req.body.burger_name], (result) => {
        res.json({ id: result.insertId });
    });
});

//this shows whether or not a burger has been devoured
router.put('/api/burgers/:id', (req, res) => {
    const current_id = req.params.id;
    burger.updateOne(
        { 
            id: current_id 
        },
        {
            devoured: req.body.devoured
        },
        (result) => {
            if (result.changedRows === 0) {
                return res.status(400).end();
            }
            res.status(200).end();
        });
});

//this deletes a burger
router.delete('/api/burger/:id', (req, res) => {
    const current_id = req.params.id;
    burger.delete(condition, (result) => {
        if (result.affectedRows === 0){
            return res.status(404).end();
        }
        res.status(200).end();
    });
});


module.exports = router;