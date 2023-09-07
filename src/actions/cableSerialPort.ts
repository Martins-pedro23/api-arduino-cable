import { SerialPort } from "serialport";

/* const port = new SerialPort({
  path: SerialPort.list().then((ports) => ports[portItemIndex].path),
  baudRate: 9600,
}); */

class Teste {
  public port!: SerialPort;

  constructor() {
    this.port;
  }

  start() {
    SerialPort.list().then((ports) => {
      ports.forEach((portItem, index) => {
        try {
          const port = new SerialPort({
            path: portItem.path,
            baudRate: 9600,
          });
          port.on("data", (data) => {
            if (data.toString() === "A") {
              console.log("Data:", data.toString());
              this.port = port;
            }
          });
        } catch (err) {}
      });
    });
  }

  get() {
    this.port.on("data", (data) => {
      console.log("Data:", data.toString());
    });
  }

  mensageSender = (mensage: string) => {
    this.port.write(mensage);
    return this.port.read();
  };

  mensageReceiver = () => {
    this.port.read();
  };

  portListener = () => {
    this.port.on("data", (data: string) => {
      return data.toString();
    });
  };
}

export default new Teste();

/* port.on("data", (data) => {
  console.log("Data:", data.toString());
});

const mensageSender = (mensage: string) => {
  port.write(mensage);
  return port.read();
};

const mensageReceiver = () => {
  port.read();
};

const portListener = () => {
  port.on("data", (data: string) => {
    return data.toString();
  });
};  */

/* export { mensageReceiver, mensageSender, portListener };
 */
