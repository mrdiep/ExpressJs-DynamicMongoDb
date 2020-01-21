import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';

const dbName = 'test';

export async function insert(collectionName, value) {

    return new Promise((s,r) => {
        const client = new MongoClient(url);

        client.connect((err) => {
            if (err) {
                r(err);
                client.close();
                return;
            }
            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            collection.insert(value, (insertErr, result) => {
                if (insertErr) {
                    r(insertErr);
                    client.close();
                    return;
                }

                s(result);
                client.close();
            });
        })
    });
};

export async function update(collectionName, filter, value) {
    return new Promise((s,r) => {
        const client = new MongoClient(url);

        client.connect(function(err) {
            if (err) {
                r(err);
                client.close();
                return;
            }
            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            collection.updateOne(filter, value, function(updateErr, result) {
                if (updateErr) {
                    r(updateErr);
                    client.close();
                    return;
                }
                s(result);
                client.close();
            });
        })
    });
};

export async function find(collectionName, filter, project) {
    console.log(collectionName, filter, project)
    return new Promise((s,r) => {
        const client = new MongoClient(url);

        client.connect((err) => {
            if (err) {
                r(err);
                client.close();
                return;
            }
            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            collection.find(filter, { projection: project }).toArray((findErr, docs) => {
                if (findErr) {
                    r(findErr);
                    client.close();
                    return;
                }
                s(docs);
                client.close();
              });;
        })
    });
};


export async function remove(collectionName, filter) {
    return new Promise((s,r) => {
        const client = new MongoClient(url);

        client.connect(function(err) {
            if (err) {
                r(err);
                client.close();
                return;
            }
            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            collection.deleteOne(filter, function(findErr, result) {
                if (findErr) {
                    r(findErr);
                    client.close();
                    return;
                }
                s(result);
                client.close();
              });
        })
    });
};