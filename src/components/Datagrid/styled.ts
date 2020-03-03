import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Table = styled.table`
  flex: 1;
  th {
    background: lightgray;
    padding: 4px 8px;
    min-width: 80px;
  }
  td {
    padding: 4px 8px;
    cursor: copy;
  }
`;
