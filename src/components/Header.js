import styled from "styled-components";

const HeaderStyle = styled.h1`
font-family: 'Dongle', sans-serif;text-transform: lowercase;
color: #F68DC6;
margin: 0 14px 36px 0;
font-size: 54px;
text-align: right;
`

export const Header = ({title}) =>{
    return (
      <HeaderStyle>{title}</HeaderStyle>
    )
}