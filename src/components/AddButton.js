import styled from "styled-components"

const StyledButton = styled.button`
font-family: 'Ubuntu', sans-serif;
padding: 14px 30px 12px 30px;
border: none;
border-radius: 28px;
font-size: 18px;
background-color: #F68DC6;
color: white;
font-weight: 500;
margin: 0 0 20px 0;
width: 100%;


&:hover{
background-color: #4E4198;
transition: 0.2s;

}
`
export function AddButton({onClick}){
    return(
        <StyledButton type='button' onClick={onClick}>Add</StyledButton>
    )
}