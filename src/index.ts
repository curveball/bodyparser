import { Context, Middleware } from '@curveball/curveball';

export default function bodyParser(): Middleware {

  return async (ctx: Context, next) => {

    const type = ctx.request.type;
    if (type === 'application/json' || /^application\/(.*)\+json$/.test(type)) {
      ctx.request.body = JSON.parse(await ctx.request.rawBody('utf-8'));
    } else if (type.startsWith('text/')) {
      ctx.request.body = await ctx.request.rawBody('utf-8');
    }

    return next();

  }

}
