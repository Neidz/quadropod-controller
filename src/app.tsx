import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import { theme } from './stores/theme';
import { IndividualControllers } from './components/individualControllers';
import { Options } from './components/options';
import { FC, useState } from 'react';
import { MotorOptions } from './types/motorTypes';

const AppWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.purple900};
  color: ${({ theme }) => theme.colors.grey50};
  padding: 16px;
  box-sizing: border-box;
`;

export const App: FC = () => {
  const [ipAddress, setIpAddress] = useState<string>('192.168.0.100');
  const [speed, setSpeed] = useState<number>(500);
  const [motors, setMotors] = useState<MotorOptions[]>([]);

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <IndividualControllers motors={motors} setMotors={setMotors} />
        <Options config={{ ipAddress, setIpAddress, speed, setSpeed }} motors={motors} />
      </AppWrapper>
    </ThemeProvider>
  );
};
