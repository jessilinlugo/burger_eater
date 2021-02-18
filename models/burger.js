const orm = require('../config/orm.js');

const burger = {
    selectAll(cb) {
        orm.selectAll((res) => cb(res));
    },
    insertOne(burger, cb) {
        orm.insertOne(burger, (res) => cb(res));
    },

    updateOne(id, boolean, cb) {
        orm.updateOne(boolean, id, (res) => cb(res));
    }
};

module.exports = burger;