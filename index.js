const express = require('express');

const app = express();
const port = 8000;

require('./app/routes')(app);

app.listen(port, () => {
		console.log('We are live on ' + port);
});
