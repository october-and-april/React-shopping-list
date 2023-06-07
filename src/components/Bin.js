import styled from "styled-components";
import kosz from "../assets/bin.png";

const BinImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  cursor: pointer;
`;
export function Bin({ importantFunction }) {
 
  return <BinImage src={kosz} alt="bin" onClick={importantFunction}/>;
}
