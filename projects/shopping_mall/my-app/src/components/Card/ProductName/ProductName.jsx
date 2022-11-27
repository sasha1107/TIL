import styled from 'styled-components'

const Name = styled.strong`
    font-size: 18px;
    cursor: pointer;
`

export default function ProductName({productName}) {
    return (
        <Name className='sl-ellipsis'>{productName}</Name>
    )
}