import bodyParser from '../src/index';
import { expect } from 'chai';
import { mwInvoke, buildRequest } from './util';
import { BadRequest } from '@curveball/http-errors';

describe('bodyParser middleware', () => {

  it('should parse text/plain into a string', async () => {

    const request = buildRequest(
      'text/plain',
      'Hello world'
    );

    await mwInvoke(
      bodyParser(),
      request
    );

    expect(request.body).to.equal('Hello world');

  });
  it('should parse application/json into an object', async() => {

    const request = buildRequest(
      'application/json',
      '{ "m": "Hello world" }'
    );

    await mwInvoke(
      bodyParser(),
      request
    );

    expect(request.body).to.eql({ m: 'Hello world' });

  });
  it('should parse application/hal+json into an object', async() => {

    const request = buildRequest(
      'application/hal+json',
      '{ "m": "Hello world" }'
    );

    await mwInvoke(
      bodyParser(),
      request
    );

    expect(request.body).to.eql({ m: 'Hello world' });

  });
  it('should parse application/x-www-form-urlencoded into an object', async() => {

    const request = buildRequest(
      'application/x-www-form-urlencoded',
      'm=Hello%20world'
    );

    await mwInvoke(
      bodyParser(),
      request
    );

    expect(request.body).to.eql({ m: 'Hello world' });

  });
  it('should not do anything with other filetypes', async() => {

    const request = buildRequest(
      'application/xml',
      '{ "m": "Hello world" }'
    );

    await mwInvoke(
      bodyParser(),
      request
    );

    expect(request.body).to.equal(null);

  });
  it('should map an empty body to an empty json object', async() => {

    const request = buildRequest(
      'application/json',
      ''
    );

    await mwInvoke(
      bodyParser(),
      request
    );

    expect(request.body).to.eql({});

  });
  it('should return 400 Bad Request status when JSON is not valid', async() => {

    const request = buildRequest(
      'application/json',
      '{ %@#D: asdddd2w22!~@# }'
    );

    let hasThrown = false;

    try {

      await mwInvoke(
        bodyParser(),
        request
      );
    } catch (err) {

      hasThrown = true;
      expect(err).to.be.an.instanceOf(BadRequest);

    }

    expect(hasThrown).to.equal(true);

  });

});
