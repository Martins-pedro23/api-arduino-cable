import { SerialPort } from "serialport";

const port = new SerialPort({
  path: "COM3",
  baudRate: 9600,
});

const mensageSender = (mensage: string) => {
  port.write(mensage);
  return port.read();
};

export { mensageSender };


