import { blue, underline } from "colorette";
import { app } from "./app";

const start = async () => {
  try {
    await app.listen({ port: 3000 }, () => {
      console.log("-".repeat(50));
      console.log(
        blue(" ✅ Server is running on port 3000 🚀\n"),
        blue(`✅ Servidor rodando em: ${underline("http://localhost:3000\n")}`)
      );
    });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
