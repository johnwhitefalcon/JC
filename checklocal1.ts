import { serve, Server, ServerRequest } from "https://deno.land/std@0.106.0/http/server.ts";

const server = serve({ port: 5000 });

const fres = await fetch('https://swapi.dev/api/films/');
const fdata = await fres.json();


for await (const request of server) {
 
    request.respond({ 
      body: JSON.stringify(fres)
    });
  }
