import { MotorOptions } from '../../types/motorTypes';

// command has format #1P500#2P500T500D0 but # can't be sent through param so _ is used instead and changed to # on microcontroller
const createCommand = (motors: MotorOptions[], speed: number): string => {
  let command = '';

  motors.forEach((el) => {
    command += `_${el.number}P${el.position}`;
  });

  command += `T${speed}D0`;

  return command;
};

export const sendCommand = (motors: MotorOptions[], ipAddress: string, speed: number) => {
  fetch(`http://${ipAddress}/?command=${createCommand(motors, speed)}`);
};
