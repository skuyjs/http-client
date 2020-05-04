import http from 'http';
import https from 'https';
import URL from 'url';

import ClientOptions from './typings/ClientOptions';

const onRequest = (resolve: (value?: unknown) => void) => (result: any) => {
  let body: string = '';
  result.setEncoding('utf8');
  result.on('data', (chunk: any) => {
    body += chunk;
  });
  result.on('end', () => {
    resolve(body);
  });
};

export const createRequest = (options: ClientOptions) =>
  new Promise((resolve, reject) => {
    const url = URL.parse(options.url);

    options = {
      ...options,
      hostname: url.host,
      path: url.path,
      port: url.port
    };

    let req;
    if (url.protocol === 'https:') {
      req = https.request(options, onRequest(resolve));
    } else {
      req = http.request(options, onRequest(resolve));
    }

    req.on('error', (err: Error) => {
      reject(err);
    });

    req.end();
  });
