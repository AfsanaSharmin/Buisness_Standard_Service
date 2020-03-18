const express = require('express')
const bodyParser = require('body-parser')
const Pool = require('pg').Pool
const approutes = require('./routes/approutes')
const cors = require("cors");
const app = express();
app.use(cors());
var log4js = require('log4js');
app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));

const port = 3000 // config file
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})
app.use(approutes);

const db = require("./SequelizeORM/sequelizeOrmIndex");
db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})