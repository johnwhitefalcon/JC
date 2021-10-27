import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

var jc = "test number 3333 write to the browser";

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
    // var print = data.map(function(item: any){

      var jc1 = data;
      var print = jc1.forEach(function(item: any){
          return item;
      })

        context.response.body =
        `<!DOCTYPE html>
				 <html lang="en">
				 <head>
			   <meta charset="UTF-8">

				 <body>
			   ${print};
			
				 </body>
				 </html>`;
       
       })
   })
     
//})

  

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener('listen', () =>{

})

await app.listen({ port: 5000 });