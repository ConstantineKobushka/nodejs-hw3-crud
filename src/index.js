import './env.js';

import { setupServer } from './server.js';
import { initMogoConnection } from './db/initMongoConnection .js';

const boostrap = async () => {
  await initMogoConnection();
  setupServer();
};

boostrap();
