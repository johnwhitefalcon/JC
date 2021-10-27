
//NOT WORKING YET THIS WILL BE AN OAK VERSION OF WHAT WE DID IN NASA1 WITH FETCH


import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

const app = new Application();
const port: number = 5000;

const router = new Router();

router.get("/", function (context) {
	 context.response.body =
        `<!DOCTYPE html>
				 <html lang="en">
				 <head>
			   <meta charset="UTF-8">
			  
			   <title>Sanity <-> Deno</title>
				 </head>
				 <body>
			   <div id="root">
	       <h1> jc you did it Deno and React with Sanity</h1>
				 </div>
				 </body>
				 </html>`;
 });

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({port});
console.log(`yeeehooo jc server is running on port: ${port}`);