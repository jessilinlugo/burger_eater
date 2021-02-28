const connection = require('./connection.js');

const orm = {
    selectAll(cb) {
        console.log('triggered at orm');
        const queryString = `SELECT * FROM burgers;`;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
            console.log('this is result from select all', result);
        });
    },
    
    insertOne(burger, cb) {
        let queryString = `INSERT INTO burgers SET burger_name = ?;`;
        connection.query(queryString, burger, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne(boolean, id, cb) {
        let queryString = `UPDATE burgers SET ? WHERE ?;`;
        connection.query(queryString, [boolean, id], (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};


  module.exports = orm;