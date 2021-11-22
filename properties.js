
import { connectToDatabase } from '../../util/mongodb';
import { Router } from 'next/router';

export default async function handler(req, res){
    const {db} = await connectToDatabase();

    const data = await db.collection("listingsAndReviews").find({}).toArray();
    res.json(data);

}



