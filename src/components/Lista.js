import styled from "styled-components";
import { Bin } from "./Bin";
import { useState } from "react";
import { Checkbox } from "./Checkbox";
const Lividi = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(200, 200, 200, 0.4);
  border-radius: 8px;
  margin: 10px 0 0px 0;
  padding: 8px 14px;
  color: rgb(78, 65, 152);
  font-size: 18px;
  font-weight: 500;
  text-align: end;
  max-width: 500px;

  &.crossed {
    text-decoration: line-through;
  }
`;

export function ProductDiv({ listitem }) {
  const [exist, setExist] = useState(true);
  const [buy, setBuy] = useState(false);

  const hideList = () => {
    setExist(false);
  };
  const smthBuy = () => {
    setBuy(!buy);
  };
  return exist ? (
    <Lividi className={buy ? "crossed" : ""}>
      {listitem}
      <div>
        <Checkbox  action={smthBuy} />
        <Bin importantFunction={hideList} />
      </div>
      
    </Lividi>
  ) : null;
}
