import { buildApp } from './app/app';
import { environment } from './environments/environment';

(async () => {
  const app = await buildApp();

  app.listen({ port: environment.port }, (err, address) => {
    if (err) {
      app.log.error(err);
      process.exit(0);
    }

    if (!environment.production) {
      app.log.info(`Application running on ${address}`);
    }
  });
})();
