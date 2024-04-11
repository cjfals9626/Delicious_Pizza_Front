
import styled, { css } from "styled-components";

const StyleBox = styled.div`
    ${({ width }) =>
    width &&
    css`
        width: ${width};
    `}
    ${({ height }) =>
    height &&
    css`
        height: ${height};
    `}
    ${({ padding }) =>
    padding &&
    css`
        padding: ${padding};
    `}
    ${({ margin }) =>
    margin &&
    css`
        margin: ${margin};
    `}
    ${({ display }) =>
    display &&
    css`
        display: ${display};
    `}
    ${({ backgroundColor }) =>
    backgroundColor &&
    css`
        background-color: ${backgroundColor};
    `}


    ${({primary}) =>
    primary &&
    css`
        padding: 1vmax;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        text-align: center;

        &:hover {
            background-color: #BCFF66;
            cursor: pointer;
        }
    `}

`;


function Box({ children, ...props}) {
  return (
    <StyleBox {...props}>
        {children}
    </StyleBox>
  );
}

export default Box;