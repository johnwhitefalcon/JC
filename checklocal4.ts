import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

interface apipost {
    id: number;
    title: string;

}

router.get('/', async (context) =>{
   const fres = await fetch('https://jsonplaceholder.typicode.com/posts');
   const fdata = await fres.json();


context.response.body = "jc testing it with fetch wooohoooo oak router"
})


app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener('listen', () =>{

})

await app.listen({ port: 5000 });