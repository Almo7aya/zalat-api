// for custom error logging
//
import config from 'config';
import { server } from './server';

server.listen(config.get('PORT'));

process.on('uncaughtException', (e) => {
  console.error(e);
  process.exit(1); // have to finish the process
});

process.on('rejectionHandled', (e) => {
  console.error(e);
  process.exit(1); // unhandled rejection should end the process
});
