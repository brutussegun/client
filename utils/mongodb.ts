import {Db, MongoClient} from "mongodb";
import mongoose from "mongoose";

const MONGODB_URI: any = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

let cachedClient: MongoClient;
let cachedDb: Db;


let {mongo}: any = global;
let cached = mongo

if (!cached) {
    cached = mongo = {conn: null, promise: null}
}

export async function mongoDBConnection() {
    // check the cached.
    if (cachedClient && cachedDb) {
        // load from cache
        return {
            client: cachedClient,
            db: cachedDb,
        };
    }
    if (cached.conn) {
        return cached.conn
    }

    // set the connection options
    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    // check the MongoDB URI
    if (!MONGODB_URI) {
        throw new Error("Define the MONGODB_URI environmental variable");
    }
    // check the MongoDB DB
    if (!MONGODB_DB) {
        throw new Error("Define the MONGODB_DB environmental variable");
    }

    // Connect to cluster
    let client = new MongoClient(MONGODB_URI);
    await client.connect();
    let db = client.db(MONGODB_DB);
    console.log(` YEA!!! MongoDB ATLAS CONNECTED`);

    // set cache
    cachedClient = client;
    cachedDb = db;

    return {
        client: cachedClient,
        db: cachedDb,
    };
}

export const mongooseConnection = async () => {
    try {
        const conn = await mongoose.connect(MONGODB_URI);
        console.log(
            `MONGOOSE CONNECTION ROUTE IS ON`
        );
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};