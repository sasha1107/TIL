import styled from 'styled-components'
import { Link } from "react-router-dom";
import shoppingCart from '../../assets/images/icon-shopping-cart-white.svg'
import home from '../../assets/images/icon-home.svg'

const CartLink = styled(Link)`
    width: 50px;
    height: 50px;
    background: var(--main-color) no-repeat center / 32px 32px;
    background-image : ${(props) => (props.to === 'cart/'? `url(${shoppingCart})` : `url(${home})`)};
`

export default function Cart({className}) {
    if (className === "cart" ){
        return <CartLink to='/TIL/projects/shoppingmall_react/cart' className='link-btn'/>
    }
    else {
        return <CartLink to='../TIL/projects/shoppingmall_react' className='link-btn'/>
    }
}
