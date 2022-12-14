import { FC } from 'react';
import { MotorOptions } from '../../types/motorTypes';
import { MotorWrapper, Wrapper } from './style';

interface IndividualControllersProps {
  motors: MotorOptions[];
  setMotors: React.Dispatch<React.SetStateAction<MotorOptions[]>>;
}

export const IndividualControllers: FC<IndividualControllersProps> = ({ motors, setMotors }) => {
  return (
    <Wrapper>
      <MotorWrapper></MotorWrapper>
    </Wrapper>
  );
};
