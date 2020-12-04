import { Router } from "https://deno.land/x/oak/mod.ts";
import { sendMail } from "./controller.ts";

const router = new Router();

router
  .get("/", (ctx) => {
    ctx.response.body = "This is the home route";
  })
  .post("/send-mail", sendMail);

export default router;