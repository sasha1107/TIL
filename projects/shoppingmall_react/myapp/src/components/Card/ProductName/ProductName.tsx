import React from 'react'
import styled from 'styled-components'

const Name = styled.strong`
    font-size: 18px;
    cursor: pointer;
`

export default function ProductName({productName}: {productName: string}) {
    return (
        <Name className='sl-ellipsis'>{productName}</Name>
    )
}