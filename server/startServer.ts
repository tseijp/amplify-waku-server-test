import { Hono } from "hono";
import { compress } from "hono/compress";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { serverEngine } from "./serverEngine";
// import { serverEngine } from "waku/unstable_hono";

const app = new Hono();

app.use(compress());

app.use(serveStatic({ root: "./dist/public" }));

app.use(serverEngine());

// app.use(
//   serverEngine({
//     cmd: "start",
//     // @ts-ignore
//     loadEntries: () => import("./dist/entries"),
//     // @ts-ignore
//     env: process.env,
//   })
// );

app.notFound((c) => c.text("404 Not Found", 404));

console.log(`ready: Listening on http://localhost:3000/`);

serve({ ...app, port: 3000 });
