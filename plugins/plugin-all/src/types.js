import * as client from './operatorsClient.js';
import * as server from './operatorsServer.js';

export default {
  operators: {
    client: Object.keys(client),
    server: Object.keys(server),
  },
};
