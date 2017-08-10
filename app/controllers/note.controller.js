let model = require('../dataAccesses/note.dataAccess');

let getAll = function (req, res) {
    model.getAll((err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send({success: false, message: 'Internal server error'});
        } else {
            res.status(200).send({success: true, data: data});
        }
    });
};

let get = function (req, res) {
    let id = req.params.id;

    model.get(id, (err, data) => {
        if (err) {
            if (err === 404) {
                res.status(404).send({success: false, message: "Person not found"});
            } else {
                console.log(err);
                res.status(500).send({success: false, message: 'Internal server error'});
            }
        } else {
            res.status(200).send({success: true, data: data});
        }
    });
};

let check = function (req, res) {
    let id = req.params.id;

    model.check(id, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send({success: false, message: 'Internal server error'});
        } else {
            res.status(200).send({success: true, data: data});
        }
    })
};

module.exports = {
    getAll,
    get,
    check
};
