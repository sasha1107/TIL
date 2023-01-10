import styled from "styled-components";

export const Cont = styled.div`
    padding: 100px;
    overflow: scroll;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const InputCont = styled.div`
    width: 100%;
    text-align: center;
`
export const LogoImg = styled.img`
    width: 35%;
`
export const BtnMore = styled.button`
    &:disabled {
        display: none;
    }
`
export const Inp = styled.input`
    border: 1px solid #5f6368;
    border-radius: 24px;
    padding: 8px 14px;
    width: 35%;
`