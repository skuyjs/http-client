import http from 'http';
import URL from 'url';
import ClientOptions from './typings/ClientOptions';

const createRequest = (options: any) =>
  new Promise((_, reject) => {
    const url = URL.parse(options.url);

    options = {
      ...options,
      hostname: url.host,
      path: url.path,
      port: url.port
    };

    const req = http.request(options, (result) => {
      let body: string = '';
      result.setEncoding('utf8');
      result.on('data', (chunk) => {
        body += chunk;
      });
      result.on('end', () => {
        console.log(body);
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.end();
  });

const methods: any = {
  get: async (url: string) => {
    const options: ClientOptions = { url, methods: 'GET' };
    return createRequest(options);
  }
};

export default class Client {
  request: http.ClientRequest;

  constructor(
    // private options: ClientOptions
  ) {
    Object.assign(this, methods);
  }
}

Object.assign(Client, methods);
