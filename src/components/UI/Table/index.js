import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  margin: 1rem auto;
  th,
  td {
    border: 0.25rem solid #404040;
    text-align: center;
  }
  th {
    font-size: 1rem;
    background-color: #202020;
  }

  tr:nth-child(even) {
    background-color: #303030;
  }
`;

export default Table;