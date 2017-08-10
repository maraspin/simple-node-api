let serverPort = 3000;
let csvPath = "./data/people.csv";
/* this file let you implement all the server configs in one single file and add it in the .gitIgnore file so that you
* never push private keys or something else that can compromise your security. This is just an example. */
module.exports = {
    serverPort,
    csvPath
};