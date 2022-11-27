// import './productPrice.css'
import styled from 'styled-components'

const PriceTag = styled.strong`
    display: inline-block;
    font-weight: 700;
    font-size: 24px;
    span {
        font-weight: 400;
        font-size: 16px;
        margin-left: 2px;
        width: fit-content;
    }
    cursor: pointer;
`
export default function ProductPrice({price}) {
    return (
        <PriceTag>
            {price.toLocaleString()}
            <span>원</span>
        </PriceTag>
    )
}
