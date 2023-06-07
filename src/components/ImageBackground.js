import styled from "styled-components"
const Image= styled.div`

img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
margin: 22px;
  }
`
export const ImageBackground = ({image}) => {
    return( <Image>
        <img src={image} alt="Background"/>
    </Image>)
}