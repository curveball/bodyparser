import Request from '@curveball/core/dist/node/request';
import bodyParser from '../src/index';
import { expect } from 'chai';

function buildRequest(type: string, body: string): Request<any> {

  const request = new Request(<any>{
    headers: {}
  });

  // @ts-ignore
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

describe('bodyParser middleware', () => {

  it('should parse text/plain into a string', async () => {

    // @ts-ignore
    const request = buildRequest(
      'text/plain',
      'Hello world'
    );

    await bodyParser()(
      <any>{ request },
      async () => {}
    );

    expect(request.body).to.equal('Hello world');

  });
  it('should parse application/json into an object', async() => {

    // @ts-ignore
    const request = buildRequest(
      'application/json',
      '{ "m": "Hello world" }'
    );

    await bodyParser()(
      <any>{ request },
      async () => {}
    );

    expect(request.body).to.eql({ m: 'Hello world' });

  });
  it('should parse application/hal+json into an object', async() => {

    // @ts-ignore
    const request = buildRequest(
      'application/hal+json',
      '{ "m": "Hello world" }'
    );

    await bodyParser()(
      <any>{ request },
      async () => {}
    );

    expect(request.body).to.eql({ m: 'Hello world' });

  });
  it('should parse application/x-www-form-urlencoded into an object', async() => {

    // @ts-ignore
    const request = buildRequest(
      'application/x-www-form-urlencoded',
      'm=Hello%20world'
    );

    await bodyParser()(
      <any>{ request },
      async () => {}
    );

    expect(request.body).to.eql({ m: 'Hello world' });

  });
  it('should not do anything with other filetypes', async() => {

    // @ts-ignore
    const request = buildRequest(
      'application/xml',
      '{ "m": "Hello world" }'
    );

    await bodyParser()(
      <any>{ request },
      async () => {}
    );

    expect(request.body).to.equal(undefined);

  });
  it('should map an empty body to an empty json object', async() => {

    // @ts-ignore
    const request = buildRequest(
      'application/json',
      ''
    );

    await bodyParser()(
      <any>{ request },
      async () => {}
    );

    expect(request.body).to.eql({});

  });

});
