import styled from 'styled-components'

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & input {
    border: none;
    width: 550px;
    height: 40px;
    border-radius: 8px;
    padding: 0 20px;
  };

  & p {
    margin-left: -50px;
    color: #E84D3B;
    font-weight: 700;
    cursor: pointer
  }
`