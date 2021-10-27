
import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  addQuote,
  getQuotes,
  getQuote,
  updateQuote,
  deleteQuote,
} from "./quotes.ts";

const router = new Router();

router
  .get("/quote", getQuotes) // Get all quotes
  .get("/quote/:id", getQuote) // Get one quote of quoteID: id
  .post("/quote", addQuote) // Add a quote
  .put("/quote/:id", updateQuote) // Update a quote
  .delete("/quote/:id", deleteQuote); // Delete a quote

export default router;



