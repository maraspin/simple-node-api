let fs = require('fs');
let serverConfig = require('../../app/configs/server.config');

let getAll = function (callback) {
    readFilePartial(serverConfig.csvPath, (err, data) => {
        if (err) {
            console.log(err);
            return callback(err);
        } else {
            return callback(null, data);
        }
    });
};
let get = function (id, callback) {
    readFilePartial(serverConfig.csvPath, (err, data) => {
        if (err) {
            console.log(err);
            return callback(err);
        } else {
            for (let p in data) {
                if (data[p].id === id) {
                    return callback(null, data[p]);
                }
            }
            return callback(404);
            //return callback(null, data[id + 1]); --> ONLY IF the file will be always ordinated. or just don't do it. please <3
        }
    });
};
let check = function (id, callback) {
    readFile(serverConfig.csvPath, (err, data) => {
        if (err) {
            console.log(err);
            return callback(err);
        }
        for (let p in data) {
            if (data[p].id === id) {
                let obj = {
                    id: data[p].id
                };
                obj.suspect = data[p].suspect === "1";
                return callback(null, obj);
            }
        }
        return callback(404);
        //return callback(null, data[id + 1]); --> ONLY IF the file will be always ordinated. or just don't do it. please <3
    });
};

function readFilePartial(path, callback) {
    let appo = [];
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return callback(err);
        } else {
            let splits = data.replace(/\r\n/g, ";").split(';');
            for (let i = 5; i < splits.length; i += 5) {
                appo.push({
                    id: splits[i],
                    surname: splits[i + 1],
                    name: splits[i + 2],
                    birthDate: splits[i + 3]
                });
            }
            return callback(null, appo);
        }
    });
}
function readFile(path, callback) {
    let appo = [];
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return callback(err);
        } else {
            let splits = data.replace(/\r\n/g, ";").split(';');
            for (let i = 5; i < splits.length; i += 5) {
                appo.push({
                    id: splits[i],
                    surname: splits[i + 1],
                    name: splits[i + 2],
                    birthDate: splits[i + 3],
                    suspect: splits[i + 4]
                });
            }
            return callback(null, appo);
        }
    });
}

module.exports = {
    get,
    getAll,
    check
};