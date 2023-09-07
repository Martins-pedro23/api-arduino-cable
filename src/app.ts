import fastify from "fastify";
import SerialPort from "./actions/cableSerialPort";
import routes from "./routes";

const app = fastify();

SerialPort.start();

app.register(routes);

export { app };
