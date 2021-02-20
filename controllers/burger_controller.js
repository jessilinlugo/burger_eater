const express = require('express');
const models = require('../models/');

//this shows all available burgers
router.get('/', (req, res) => {
    models.burger.selectAll((data) => {
        const handlebarsObj = {
            burgers: data
        };
        res.render('index', handlebarsObj);
    });
});

//this adds the user's burger to the list
router.post('api/burgers', (req, res) => {
    models.burger.insertOne(burger_name, req.body.burger, (result) => {
        res.json({ id: result.insertId });
    });
});

//this shows whether or not a burger has been devoured
router.put('/api/burgers/:id', (req, res) => {
    const current_id = req.params.id;
    mdoels.burger.updateOne(
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
    models.burger.delete(condition, (result) => {
        if (result.affectedRows === 0){
            return res.status(404).end();
        }
        res.status(200).end();
    });
});


module.exports = router;