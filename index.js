
import { connectToDatabase } from '../util/mongodb';
import React from 'react';



export default function blog({data}){

return (
  <div>
         {
            data.map((property)=>{
              return <h1>{property.name}</h1>
            })

        }

  </div>

)
  }


export async function getServerSideProps(context) {

  const {db} = await connectToDatabase();

  const data = await db.collection("listingsAndReviews").find({}).toArray();
    
  return {
    props: { data: JSON.parse(JSON.stringify(data)) }
  }

}


