import { MongoClient } from 'mongodb';

const mongoUri = `mongodb://localhost:27017/entain_db?retryWrites=true&w=majority` //process.env.MONGODB_URI;

if (!mongoUri) {
    throw new Error('MONGODB_URI environment variable is not set');
}

const client = new MongoClient(mongoUri);

export async function connectToDatabase() {

    await client.connect();
    const db = client.db('entain_db');
    return { client, db };
}
