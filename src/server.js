import express from 'express';
import bodyParser from 'body-parser';

import { insert, find, update, remove } from './database/data-client';
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const port =process.env.PORT || 5000

app.get('/', (req, res) => res.send("this is the testing mongodb"))

app.post('/find', async (req, res) => res.json(await find(req.body.collection, req.body.filter, req.body.project)));

app.post('/insert', async (req, res) => {
    await insert(req.body.collection, req.body.data);
    res.send("added");
});

app.post('/update', async (req, res) => {
    await update(req.body.collection, req.body.filter, req.body.data);
    res.send("updated");
});

app.post('/remove', async (req, res) => {
    await remove(req.body.collection, req.body.filter);
    res.send("removed");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

async function main() {
    
}
main().then(() => console.log("test async"));