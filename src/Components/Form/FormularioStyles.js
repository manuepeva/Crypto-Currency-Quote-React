import styled from '@emotion/styled';

const ButtonStyled = styled.input`
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #514c4cff;
  transition: background-color 3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

export default ButtonStyled;
