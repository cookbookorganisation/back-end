const db = require('../data/config');

module.exports = {
    findAll,
    findById,
    add, 
    remove, 
    update
};

function findAll(dataBase) {
    // const fa = () => {
    //     return db(dataBase);
    // }
    // return fa();
    return db(dataBase);
};

function findById(dataBase, id) {
    // const fbid = () => {
    //     return db(dataBase).where({ id }).first()
    // };
    // return fbid();
    return db(dataBase).where({ id }).first()
};

function add(dataBase, item) {
    // const ad = () => {
    //     return db(dataBase).insert(item, "id")
    //         .then(([id]) => {
    //             return findById(dataBase, id)
    //         })
    //         .catch((error) => {
    //             return error;
    //           });
    // };
    // return ad();
    return db(dataBase).insert(item, "id")
            .then(([id]) => {
                return findById(dataBase, id)
            })
            .catch((error) => {
                return error;
            });
};

function remove(dataBase, id) {
    const remv = () => {
        findById(dataBase, id).then((item) => {
            return (deletedItem = item)
    })};
    db(dataBase).where({ id }).del().then(() => {
        return deletedItem
    });
    return remv();
};

function update(dataBase, id, changes) {
    return db(dataBase).where({ id }).update(changes).then(() => {
        return findById(dataBase, id)
    });
};