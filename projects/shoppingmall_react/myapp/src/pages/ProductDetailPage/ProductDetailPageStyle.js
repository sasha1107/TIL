import styled from 'styled-components'
import iconDelete from "../../assets/images/icon-delete.png"
import { Link } from 'react-router-dom'

export const DetailModal = styled.div`
    width: 90vw;
    padding: 60px;
    margin: 0 auto;
`
export const Close = styled(Link)`
    width: 22px;
    height: 22px;
    background: no-repeat center / 22px 22px;
    background-image : url(${iconDelete});
    float: right;

`
export const InfoSection = styled.section`
    display: flex;
    gap: 30px;
    margin-bottom: 40px;
    
`
export const Thumbnail = styled.img`
    width: 400px;
    height: 400px;
    /* flex: 1; */
    border: 1px solid #C4C4C4;
    border-radius: 10px;
`
export const TxtSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
`
export const ProductTitle = styled.h2`
    font-size: 24px;
    color: #333333;
`
export const PriceTag = styled.strong`
    display: inline-block;
    font-weight: 700;
    font-size: 24px;
    color: #333333;
    margin-bottom: 80px;
    span {
        font-weight: 400;
        font-size: 16px;
        margin-left: 2px;
        width: fit-content;
    }
`

export const SelectCount = styled.div`
    width: fit-content;
    display: flex;
    justify-content: start;
    border: 1px solid #BDBDBD;
    border-radius: 5px;
`

export const BtnAddSub = styled.button`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    background: none;
    &.sub {
        border-right: 1px solid #BDBDBD;
    }
    &.add {
        border-left: 1px solid #BDBDBD;
    }
    
    
`
export const SpanCount = styled.span`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const HrGray = styled.div`
    height: 2px;
    background: #E0E0E0;

`

export const TotalPriceCont = styled.div`
    display: flex;
    justify-content: space-between;
`

export const TotalPrice = styled.strong`
    font-weight: 500;
    font-size: 18px;
`

export const TotalCountCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: fit-content;
    gap: 12px;
`

export const Bar = styled.span`
    font-size: 18px;
    color: #C4C4C4;
    /* display: flex; */
`

export const TotalPriceTag = styled.strong`
    font-weight: 700;
    font-size: 36px;
    color: #EB5757;
    display: flex;
    align-items: center;
    span {
        font-weight: 400;
        font-size: 18px;
        margin-left: 2px;
        width: fit-content;
    }
`

export const TotalCount = styled.strong`
    color: #828282;
    font-size: 18px;
    span {
        color: #EB5757;
    }
`

export const ButtonCont = styled.div`
    display: flex;
    gap: 6px;
`

export const BtnBuy = styled.button`
    background: #6327FE;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    color: #FFFFFF;
`

export const DetailTit = styled.h2`
    display: block;
    font-weight: 500;
    font-size: 16px;
    color: #333333;
    margin-bottom: 14px;
`