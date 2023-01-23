import styled from "styled-components";
export const Button = ({ children, disabled, onClick,bagColor}) => {
  return <StyledBtn bagColor={bagColor} disabled={disabled} onClick={onClick}   >{children}</StyledBtn>;
};
const StyledBtn = styled.button`
    padding: 10px 25px;
    background-color: ${(props) => props.bagColor ? '#650c68' : '#c04dc4' };
    color: white;
    border-radius: 20px;
    border: none;
    font-size: 20px;
    cursor: pointer;
    :disabled{
        background-color: gray
    }
`
