import fastify from "fastify";
import routes from "./routes";
import {fastifyExpress} from "@fastify/express"
import SerialPort from "./actions/cableSerialPort";

const app = fastify();
SerialPort.start();

app.register(fastifyExpress);
app.register(routes);




export { app };
