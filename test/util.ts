import { MemoryRequest, invokeMiddlewares, Middleware, Request } from '@curveball/core';

export function buildRequest(type: string, body: string): MemoryRequest<any> {

  const request = new MemoryRequest(
    'GET',
    '/',
    {},
    body,
  );

  // @ts-expect-error trust me on this
  request.rawBody = async (encoding) => {
    if (typeof encoding !== 'undefined') {
      return body;
    } else {
      return Buffer.from(body);
    }
  };
  request.headers.set('Content-Type', type);

  return request;

}

export async function mwInvoke(mw: Middleware, request: Request) {

  await invokeMiddlewares({ request } as any, [mw]);

}

