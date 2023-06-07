import styled from "styled-components";
import { ShoppingInput } from "./ShopingInput";
import { Header } from "./Header"; 
const Divider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 20px 45px 0 45px;
`;
export function InputDivider() {
  return (
    <>
      <Divider>
        <Header title='.Shopping list'></Header>
        <ShoppingInput/>
      </Divider>
      </>
  );
}
