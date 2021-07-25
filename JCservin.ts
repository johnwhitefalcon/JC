
import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

const app = new Application();
const port: number = 5500;

const router = new Router();

router.get("/", (context) => {
    context.response.body =
        `<!DOCTYPE html>
				 <html lang="en">
				 <head>
			   <meta charset="UTF-8">
			  
			   <title>Sanity <-> Deno</title>
				 </head>
				 <body>
			   <div id="root">
	       <h1> Deno and React with Sanity</h1>
				 </div>
				 </body>
				 </html>`;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({port});
console.log(`server is running on port: ${port}`);
