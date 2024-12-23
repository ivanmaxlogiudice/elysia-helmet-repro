import { Elysia } from "elysia";
import { plugin } from "@backend/module";
import { helmet } from "elysia-helmet";

const app = new Elysia()
    .use(helmet())
    .use(plugin)
    .listen(3000);

export type app = typeof app;

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
