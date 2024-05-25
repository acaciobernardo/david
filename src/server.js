const express = require('express');
const mssql = require("mssql/msnodesqlv8");
const cors = require('cors');
var bodyparser = require('body-parser');

// Criar a conexão à base de dados
const connection = new mssql.ConnectionPool({
    database: "Hotel",
    server: "(localdb)\\MSSQLLocalDB",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
});

const app = express();

app.use(cors({
    origin: '*'
}));

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

connection.connect();

app.get('/login', (req, res) => {
    let {username}=req.query;
    console .log(`SELECT * FROM login where username=${username}`);
    connection.query(`SELECT * FROM login where username='${username}'` , (err, results) => {
        if (err) {
            res.status(500).json({
                error: 'Erro a obter dados da base de dados'
            });
        } else {
            res.json(results.recordset);
        }
    });
});

app.get('/quarto', (req, res) => {
    let {id}=req.query;
    if (id == undefined) {
        var sql=`SELECT * FROM Quartos`;
    }
    else {
        var sql=`SELECT * FROM Quartos where Quartoid=${id}`;
    }
    console.log(sql);
    connection.query(sql , (err, results) => {
        if (err) {
            res.status(500).json({
                error: 'Erro a obter dados da base de dados'
            });
        } else {
            res.json(results.recordset);
        }
    });
});

app.listen(5000, () => {
    console.log('Servidor está a escutar na porta 5000');
});
