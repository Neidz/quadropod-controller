import { FC } from 'react';
import { MotorOptions } from '../../types/motorTypes';
import { Label, Option, OptionInput, SendButton, SliderInput, Wrapper } from './style';
import { sendCommand } from './utils';

interface OptionsProps {
  config: {
    ipAddress: string;
    setIpAddress: React.Dispatch<React.SetStateAction<string>>;
    speed: number;
    setSpeed: React.Dispatch<React.SetStateAction<number>>;
  };
  motors: MotorOptions[];
}

export const Options: FC<OptionsProps> = ({ config: { ipAddress, setIpAddress, speed, setSpeed }, motors }) => {
  return (
    <Wrapper>
      <Option>
        <Label>Microcontroller IP Address</Label>
        <OptionInput value={ipAddress} onChange={(e) => setIpAddress(e.target.value)} />
      </Option>
      <Option>
        <Label>{`Servo Speed (${speed})`}</Label>
        <SliderInput
          type="range"
          min="0"
          max="5000"
          step="500"
          value={speed}
          onChange={(e) => setSpeed(!isNaN(Number(e.target.value)) ? Number(e.target.value) : 500)}
        />
      </Option>
      <SendButton onClick={() => sendCommand(motors, ipAddress, speed)}>Send Command</SendButton>
    </Wrapper>
  );
};
