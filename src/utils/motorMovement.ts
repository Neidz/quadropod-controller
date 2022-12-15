import { MotorOptions } from '../types/motorTypes';

export const setAllMotors = (pos: number) => {
  const testMotors: MotorOptions[] = [];

  for (let i = 1; i < 33; i++) {
    testMotors.push({
      number: i,
      position: pos,
      minStop: 800,
      maxStop: 2200,
      angle: 0,
    });
  }
  return testMotors;
};
