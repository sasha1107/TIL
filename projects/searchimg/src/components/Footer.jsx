import React from 'react'
import styled from 'styled-components'

const FooterCont = styled.footer`
    width: 100vw;
    text-align: center;
    background-color: #f2f2f2;
    padding: 16px 0px;
    position: fixed;
    bottom: 0;
`
export default function Footer() {
    return (
        <FooterCont>
            footer
        </FooterCont>
    )
}
