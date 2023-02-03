import React from 'react'
import { CartPageSection, CartPageContent, Title, CouponCont, SubTitle, OrderCont,Line, CouponSelect, BtnContainer } from './CartPageStyle'
import BtnLink from '../../components/BtnLink/BtnLink'
import SelectBox from '../../components/SelectBox/SelectBox'
import BtnWhite from '../../components/BtnWhite/BtnWhite'
import OrderTable from '../../components/OrderTable/OrderTable'

const coupons = [
  'Hack Your Life 개발자 노트북 파우치 2,000원 할인 쿠폰',
  'Hack Your Life 개발자 노트북 파우치 배송비 무료 쿠폰',
  '제주코딩베이스캠프 코딩 연습장 세트 2,000원 할인 쿠폰'
]

export default function CartPage() {
  return (
    <CartPageSection>
      <CartPageContent>
        <Title>장바구니/결제</Title>
        <CouponCont>
          <SubTitle>쿠폰 사용</SubTitle>
          <Line/>
          <CouponSelect>
            <SelectBox options={coupons}/>
          </CouponSelect>
        </CouponCont>
        <OrderCont>
          <SubTitle>주문 상품</SubTitle>
          <Line/>
          <BtnContainer>
            <BtnWhite text="선택 삭제하기"/>
          </BtnContainer>
          <OrderTable />
        </OrderCont>
      </CartPageContent>
      <BtnLink className="home"/>
    </CartPageSection>
  )
}