import { useState } from "react";
import styled from "styled-components";
import { AddButton } from "./AddButton";
import { ProductDiv } from "./Lista";
const Input = styled.input`
display:flex;
align-items: center;
  padding: 14px 30px 12px 30px;
  border: none;
  border-radius: 128px;
  background-color: rgba(200, 200, 200, 0.4);
  color: black;
  font-size: 18px;
  margin: 7px 0 7px 0;
  max-width: 500px;


  ::placeholder {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.685);
  }
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export function ShoppingInput() {
  const [items, setItems] = useState("");
  const [product, setProduct] = useState([]);


  const displayProducts = (event) => {
    const value = event.target.value;
    setItems(value);
  };
  const addProduct = () => {
    console.log("Adding product:", items);
    setProduct([...product, items]);
    setItems("");
  };
  const addProductEnter = (event) => {
    if (event.key === 'Enter'){
      setProduct([...product, items]);
    setItems("");
  }
  }
   
  return (
    <>
      <Input
        placeholder="Add new item..."
        type="text"
        value={items}
        onChange={displayProducts}
        onKeyPress={addProductEnter}
      />
      <AddButton onClick={addProduct} />
      <div>
        <List>
          {product.map((item, index) => (
            <li key={index}>
              <ProductDiv listitem={item}> 
              </ProductDiv>
            </li>
          ))}
        </List>
      </div>
    </>
  );
}
