import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

const fres = await fetch('https://swapi.dev/api/films/');
const fdata = await fres.json();

app.use((ctx) => {
  ctx.response.body = JSON.stringify(fres)
});

await app.listen({ port: 5000 });