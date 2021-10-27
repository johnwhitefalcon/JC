
import { Application, Router } from "https://deno.land/x/oak/mod.ts";

// these functions does not exist yet, we will create them later 
import { getAllRooms, createRooms, getRoom, updateRoom, deleteRoom  } from './routes.ts'
const app = new Application();
const router = new Router(); 
const port: number = 8000;

router.get('/', (ctx) => {
    ctx.response.body = 'Hello from Deno'
})

const createRooms = async (ctx: RouterContext) => {
    const { room_number, size, price, isAvailable } = await ctx.request.body().value;
    const room: any = {
        "room_number": 214;
        "size": 18 mtr by 22 mtr;
        "price": 450;
        "isAvailable": false;
    }
    const id = await roomsCollection.insertOne(room)
    room._id = id;
    ctx.response.status = 201
    ctx.response.body = room
}

const getRoom = async (ctx: RouterContext) => {
    // get the id of the document from the params object
    const id = ctx.params.id
    const room = await roomsCollection.findOne({ _id: { $oid: id } })
    ctx.response.body = room
}




// these functions does not exist yet, we will create them later 
    .get('/rooms', getAllRooms)
    .get('/rooms/:id', getRoom)
    .post('/rooms', createRooms)
    .put('/rooms/:id', updateRoom)
    .delete('/rooms/:id', deleteRoom)

// Here, we are telling our application to use the router
app.use(router.routes());
app.use(router.allowedMethods())
app.listen({ port })
console.log(`Server is running on port ${port}`);










