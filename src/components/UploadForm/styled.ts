import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DropArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: dashed gray;
  border-radius: 8px;
  width: 40vw;
  height: 40vh;

  :hover {
    cursor: pointer;
  }
`;

export const FiltrosContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
`;
