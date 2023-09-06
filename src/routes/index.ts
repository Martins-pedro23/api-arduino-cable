import { FastifyInstance, FastifyReply, FastifyRequest, FastifyTypeProvider } from "fastify";
import { mensageSender } from "../functions/teste.index";

interface Mensage {
    mensage: string;
}

async function routes(fastify: FastifyInstance) {
  fastify.get("/", async (request, reply) => {
    return { hello: "world" };
  });

  fastify.post("/send", async (request: FastifyRequest<{Body:Mensage}>, reply:FastifyReply) => {
    const result = mensageSender(request.body.mensage);
    reply.code(200).send({message: result});
  });
}

export default routes;
