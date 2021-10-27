//NOT WORKING BECAUSE MONGO DOESNT HAVE DENO FUNCTIONALITY YET
//jc note think this is getting server started

import { Application, Context, Router } from 'https://deno.land/x/oak/mod.ts'

const app = new Application()
const port = 8000
const router = new Router()

router.get('/', (context: Context) => {
  context.response.body = 'Hello Deno!'
})

app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({ port })


//=======================Create file called db.ts
//jc note think this initializes connection to mongo database

import { MongoClient } from 'https://deno.land/x/mongo@v0.23.1/mod.ts'

const client = new MongoClient()
client.connectWithUri(
'mongodb+srv://johnwhitefalcon:<Rectifier7#>@cluster0.ufllo.mongodb.net/mongdbaseretryWrites=true&w=majority'
)

const db = client.database('mongdbase')

//export default db


//===========Create a file friends.ts
//jc notes think this gives the mongo database a format to interface with. the object is Friend so that later when we want to addFriend we are sending a Friend object

//import db from '../db.ts'


interface Friend {
  name: string
  address: string
  phone: number
}

const friends = db.collection('mongcollect')

//=================================================post
//jc note think this sets up how a post will occur ready for when we want to action it later

//export 
const addFriend = async ({ request, response }: Context) => {
    const body = await request.body()
    if (!request.hasBody) {
      response.status = 404
      response.body = {
        success: false,
        message: 'No data provided',
      }
    }
    try {
      const { name, address, phone } = body.value
      await mongcollect.insertOne({
        name,
        address,
        phone,
      })
      response.body = {
        success: true,
        body: `Contact information was created for: ${name}`,
      }
      response.status = 201
    } catch (error) {
      response.body = null
      response.status = 500
    }
  }

//=======================get
// jc notes think this sets up how a get will occur for when we want to action it later

//export 
const getFriends = async ({ response }: Context) => {
    const data: mongcollect[] = await mongcollect.find({})
    if (data) {
      response.body = data,
      response.status = 200
    } else {
      response.body = 'not found',
      response.status = 204
    }
  }

//====================Create file called mod.ts
//jc note think this is what actually triggers the post and get to happen



friends
  .get('/friends', getFriends)
  .post('/friends', addFriend)






