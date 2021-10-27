
import { Application, Router } from "https://deno.land/x/oak/mod.ts";

// @deno-types="https://denopkg.com/soremwar/deno_types/react/v16.13.1/react.d.ts"
import React from "https://jspm.dev/react@17.0.2";
// @deno-types="https://denopkg.com/soremwar/deno_types/react-dom/v16.13.1/server.d.ts"
import ReactDOMServer from "https://jspm.dev/react-dom@17.0.2/server";
// @deno-types="https://denopkg.com/soremwar/deno_types/react-dom/v16.13.1/react-dom.d.ts"
import ReactDOM from "https://jspm.dev/react-dom@17.0.2";
import imageURLBuilder from "https://cdn.skypack.dev/@sanity/image-url@0.140.22";
export {
  BrowserRouter,
  StaticRouter,
  Link,
  Route,
  Switch,
} from "https://cdn.skypack.dev/react-router-dom";
export { React, ReactDOM, ReactDOMServer, imageURLBuilder };



const app = new Application();
const port: number = 5000;

const App = () => <h1> App Component for Deno and React with Sanity</h1>;


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
			   <div id="root">${ReactDOMServer.renderToString(<App />)}
				 </div>
				 </body>
				 </html>`;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({port});
console.log(`server is running on port: ${port}`);





