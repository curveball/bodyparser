import { Context, Middleware } from '@curveball/core';
import qs from 'querystring';

export default function bodyParser(): Middleware {

  return async (ctx: Context, next) => {

    await parse(ctx);
    return next();

  };

}

function parse(ctx: Context): Promise<void> {

  const type = ctx.request.type;
  if (type === 'application/json' || /^application\/(.*)\+json$/.test(type)) {
    return parseJson(ctx);
  }

  if (type === 'application/x-www-form-urlencoded') {
    return parseUrlEncoded(ctx);
  }
  if (type.startsWith('text/')) {
    return parseText(ctx);
  }
  return Promise.resolve();

}

async function parseJson(ctx: Context) {
  const body = await ctx.request.rawBody('utf-8');
  if (body) {
    ctx.request.body = JSON.parse(body);
  } else {
    ctx.request.body = {};
  }
}

async function parseText(ctx: Context) {
  ctx.request.body = await ctx.request.rawBody('utf-8');
}

async function parseUrlEncoded(ctx: Context) {

  ctx.request.body = qs.parse(
    await ctx.request.rawBody('utf-8')
  );

}
