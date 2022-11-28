import styled from 'styled-components'
import iconHeart from '../../assets/images/icon-heart.svg'
import iconHeartOn from '../../assets/images/icon-heart-on.svg'

export const CardLi = styled.li`
    width: 380px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const BtnLike = styled.button`
    width: 22px;
    height: 22px;
    border: none;
    background: ${ props => (props.toggle ? `url(${iconHeartOn})` : `url(${iconHeart})` )} no-repeat center / contain;
    cursor: pointer;
`
export const ProductTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`