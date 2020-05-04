import ClientOptions from './typings/ClientOptions';
import { createRequest } from './http';

const methods: any = {
  get: async (url: string) => {
    const options: ClientOptions = { url, methods: 'GET' };
    return createRequest(options);
  }
};

export default class Client {
  constructor(
    // private options: ClientOptions
  ) {
    Object.assign(this, methods);
  }
}

Object.assign(Client, methods);
