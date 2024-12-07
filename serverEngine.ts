import type { Context } from "hono";

const middleware = () => [
  import("waku/middleware/context"),
  import("waku/middleware/dev-server"),
  import("waku/middleware/rsc"),
  import("waku/middleware/ssr"),
];

// @ts-ignore
const loadEntries = () => import("./dist/entries");

const options = {
  cmd: "start",
  loadEntries,
  env: process.env as any,
};

const HONO_CONTEXT = "__hono_context";

export const serverEngine = () => {
  return async (c: Context, next: () => Promise<void>) => {
    const ctx = {
      req: {
        body: c.req.raw.body,
        url: new URL(c.req.url),
        method: c.req.method,
        headers: c.req.header(),
      },
      res: {} as any,
      context: {
        [HONO_CONTEXT]: c,
      },
      data: {
        [HONO_CONTEXT]: c,
      },
    };

    const handlers = await Promise.all(
      middleware().map(async (middleware: any) =>
        (await middleware).default(options)
      )
    );

    const run = async (index: number) => {
      if (index >= handlers.length) return;
      let alreadyCalled = false;
      const nextHandler = async () => {
        if (!alreadyCalled) {
          alreadyCalled = true;
          await run(index + 1);
        }
      };

      await handlers[index]!(ctx, nextHandler);
    };

    await run(0);

    if (ctx.res.body || ctx.res.status) {
      return c.body(
        ctx.res.body || null,
        (ctx.res.status as any) || 200,
        ctx.res.headers || {}
      );
    }

    await next();
  };
};
