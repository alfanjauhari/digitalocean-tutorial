import { FastifyPluginAsync } from 'fastify';

export type GETWelcomeQueries = {
  name?: string;
};

export type GETWelcomeReply = {
  status: 'success';
  message: string;
  time: number;
};

export const welcomeRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get<{ Querystring: GETWelcomeQueries; Reply: GETWelcomeReply }>(
    '/',
    {
      schema: {
        querystring: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
          },
        },
      },
    },
    async (req, reply) => {
      const { name } = req.query;

      reply.status(200).send({
        status: 'success',
        message: `Hello ${name ?? 'World'}!`,
        time: Date.now(),
      });
    }
  );
};
