import { Application } from "https://deno.land/x/oak/mod.ts";
const app = new Application();
import router from "./routes.ts";

const PORT: number = 3000;
app.use(router.routes());
app.use(router.allowedMethods());
app.listen({ port: PORT });