import { welcomeRoutes } from '@digitalocean-tutorial/api/welcome';
import fastify from 'fastify';
import fastifyCors from '@fastify/cors';

export async function buildApp() {
  const app = await fastify({
    logger: true,
  });

  async function closeGracefully(signal: string) {
    app.log.info(`*^!@4=> Received signal to terminate: ${signal}`);
    await app.close();
    process.exit();
  }
  process.on('SIGINT', closeGracefully);
  process.on('SIGTERM', closeGracefully);

  app.register(fastifyCors, {
    origin: true,
  });
  app.register(welcomeRoutes);

  return app;
}
