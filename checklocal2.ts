import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "oak is a more fully functioned versions of the naitive deno server";
});

await app.listen({ port: 5000 });