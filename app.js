const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const methods = [
    'GET', 'POST', 'PATCH', 'PUT', 'DELETE',
];

for (const method of methods) {
    app[method.toLowerCase()]('/', (req, res) => {
        console.log(method, {
            query: req.query,
            body: req.body,
        });

        res.send('It\'s working');
    });
}

const port = process.env.PORT || 5050;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
