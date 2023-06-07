import styled from "styled-components";
import { InputDivider } from "./InputDivider";
import { ImageBackground } from "./ImageBackground";
import background from "../assets/background.png";

const Dividi = styled.div`
min-width:700px;
min-height:350px;
  background-color: rgb(255, 255, 255);
  border-radius: 24px;
  box-shadow: 2px 37px 63px -26px rgba(60, 60, 60, 1);
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 35px 0;
  height: 100%;
  justify-content: space-between;
`;
export function MainDiv() {
  return (
    <>
      <Dividi>
        <ImageBackground image={background} />
        <InputDivider />
      </Dividi>
    </>
  );
}
