import styled from '@emotion/styled';

type Props = {
  active: boolean;
};
export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border: solid lightgray 1px;
  border-radius: 4px;
  margin: 0 8px;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  padding: 8px;
  background: ${({ active }) => active ? 'silver' : 'unset'};

  > span {
    font-size: 12px;
    :first-child {
      font-size: 20px;
    }
  }

  :hover {
    background: silver;
  }
`;
