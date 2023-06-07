import styled from "styled-components";

const CheckboxStyled = styled.input`
  width: 24px;
  height: 24px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  :checked {
    border: 1px solid #ccc;
    background-color: #4e4198;
  }
  :hover {
    background-color: #4e4198;
  }
 
`;
export function Checkbox({action}) {
  return <CheckboxStyled type="checkbox" value="1" onClick={action} />;
}
