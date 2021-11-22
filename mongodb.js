import { MongoClient } from 'mongodb'


const uri = process.env.MONGODB_URI;
const dbname = process.env.MONGO_DB;

export async function connectToDatabase(){

  const client = new MongoClient(uri);

  await client.connect({
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  
const db = await client.db(dbname);



  return { client, db }

}
