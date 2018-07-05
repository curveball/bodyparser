import { Context, Middleware } from '@curveball/curveball';

export default function bodyParser(): Middleware {

  return async (ctx: Context, next) => {

    const type = ctx.request.type;
    if (type === 'application/json' || /^application\/(.*)\+json$/.test(type)) {
      const body = await ctx.request.rawBody('utf-8');
      if (body) {
        ctx.request.body = JSON.parse(body);
      } else {
        ctx.request.body = {};
      }
    } else if (type.startsWith('text/')) {
      ctx.request.body = await ctx.request.rawBody('utf-8');
    }

    return next();

  };

}
