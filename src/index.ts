import { Context, Middleware } from '@curveball/core';
import { BadRequest } from '@curveball/http-errors';
import * as qs from 'querystring';

export default function bodyParser(): Middleware {

  return async (ctx: Context, next) => {

    await parse(ctx);
    return next();

  };

}

function parse(ctx: Context): Promise<void> {

  if (ctx.request.is('json')) {
    return parseJson(ctx);
  }

  if (ctx.request.is('x-www-form-urlencoded')) {
    return parseUrlEncoded(ctx);
  }
  if (ctx.request.type.startsWith('text/')) {
    return parseText(ctx);
  }
  return Promise.resolve();

}

async function parseJson(ctx: Context) {

  const body = await ctx.request.rawBody('utf-8');

  if (body) {

    try {

      ctx.request.body = JSON.parse(body);

    } catch (e) {

      throw new BadRequest('Unable to parse JSON: ' + e.message);

    }

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
