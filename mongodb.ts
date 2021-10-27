import { MongoClient } from "https://deno.land/x/mongo@v0.12.1/mod.ts";

const client = new MongoClient();

client.connectWithUri("mongodb+srv://<DBNAME>:<DBPASSWWORD>@cluster0.6lbak.mongodb.net/deno-oak?retryWrites=true&w=majority");

const db = client.database('denoOakApi')

export default db;