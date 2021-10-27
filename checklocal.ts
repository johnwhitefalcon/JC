import { serve } from "https://deno.land/std@0.106.0/http/server.ts";

const server = serve({ port: 5000 });
console.log("Server listing on http://localhost:8000/");
for await (const request of server) {
 
    request.respond({ 
      body: new TextEncoder().encode("this is the test 5000 jc")
    });
  }
