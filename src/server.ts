import http from 'http';

import { app } from './app';
import config from 'config';
import logger from './log';

export const server = http.createServer(app);

server.on('listening', () => logger.serverLog(`Server is running at port ${config.get('PORT')}`));

server.on('error', (error: Error & { code: string }) => {
  if (error.code === 'EADDRINUSE') {
    logger.serverLog(`Port ${config.get('PORT')} is already taken shuting down!`);
    process.exit(1);
  }
});

server.on('close', () => logger.serverLog('server closed, ?'));

