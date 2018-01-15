import * as Lifx from "node-lifx-lan";

const off = async () => Lifx.turnOffBroadcast({});

const on = async () => Lifx.turnOnBroadcast({});

export default { on, off };
