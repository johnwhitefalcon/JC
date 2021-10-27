import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

interface apipost {
    id: number;
    title: string;

}

router.get('/', async (context) =>{
   await fetch('https://jsonplaceholder.typicode.com/posts').then
   ((response) =>{
       return response.json();
   }).then
   ((data) =>{
          
       console.log(data);

   })
     
})

 

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener('listen', () =>{

})

await app.listen({ port: 5000 });