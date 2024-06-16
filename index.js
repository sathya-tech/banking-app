const express = require('express');
const app = express();
const sql = require('./utils/db');
const routes = require('./routes/routes');


app.use('/banks',routes);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something went wrong.');
});

sql.query('SELECT 1').then(() => {
    console.log("CONNECTED TO DB");
    app.listen(3000, (req, res) => {
        console.log("LISTENING ON PORT 3000");
    })
})

