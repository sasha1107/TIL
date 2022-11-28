import styled from 'styled-components'

const BtnTemplate = styled.button`
    width: fit-content;
    /* flex-grow: 0; */
    flex-basis: auto;
    padding: 10px 18px;
    background: #FFFFFF;
    border: 1px solid #BDBDBD;
    border-radius: 5px;
    .right {
        position: relative;
        left: 50%;
        color: red;
    }
`
export default function BtnWhite(props) {
    return (
        <BtnTemplate>{props.text}</BtnTemplate>
    )
}
