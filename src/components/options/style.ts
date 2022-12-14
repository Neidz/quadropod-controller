import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 0 32px;
`;

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.regular};
`;

export const OptionInput = styled.input``;

export const SliderInput = styled.input``;

export const SendButton = styled.button``;
