import { useParams } from 'react-router-dom'
import React, { useState, useContext, useEffect } from 'react'
import { callAPIResponse } from '../../database/callAPI'
import FailLoadData from '../../components/Shared/FailLoadData/FailLoadData'
import BtnWhite from '../../components/BtnWhite/BtnWhite'
import { 
    DetailModal,
    Close,
    ProductTitle,
    PriceTag,
    InfoSection,
    TxtSection,
    Thumbnail,
    SelectCount,
    BtnAddSub,
    SpanCount,
    HrGray,
    TotalPriceCont,
    TotalPrice,
    TotalCountCont,
    Bar,
    TotalPriceTag,
    TotalCount,
    ButtonCont,
    BtnBuy,
    DetailTit,
} from './ProductDetailPageStyle'

interface Data {
    id: number,
    productName: string,
    price: number,
    thumbnailImg: string,
    detailInfoImage: string[]
}


export default function ProductDetailPage() {
    const [loadData, setLoadData] = useState<Data | null>(null);
    const [count, setCount] = useState(0)
    const parameter: string | undefined = useParams().id; 
    console.log(parameter);
    useContext(callAPIResponse).then(data => {
        console.log('셋팅');
        if (parameter !== undefined){
            setLoadData(data[parseInt(parameter)-1])
        }
    })


    function handleCountSub(){
        setCount(count - 1)
    }
    function handleCountAdd(){
        setCount(count + 1)
    }
    useEffect(() => {
        console.log(count);
        // eslint-disable-next-line
    }, [])
    

    return (
        <DetailModal>
            <Close to="../TIL/projects/shoppingmall_react/"/>
            {
            loadData !== null ? 
                <>
                    <InfoSection>
                        <Thumbnail src = {"https://test.api.weniv.co.kr/" + loadData.thumbnailImg} alt="ff"></Thumbnail>
                        <TxtSection>
                            <ProductTitle>{loadData.productName}</ProductTitle>
                            <PriceTag>{loadData.price}<span>원</span></PriceTag>
                            <p>택배배송 / 무료 배송</p>
                            <HrGray/>
                            <SelectCount>
                                <BtnAddSub onClick={handleCountSub} className="sub">-</BtnAddSub>
                                <SpanCount>{count}</SpanCount>
                                <BtnAddSub onClick={handleCountAdd} className="add">+</BtnAddSub>
                            </SelectCount>
                            <HrGray/>
                            <TotalPriceCont>
                                <TotalPrice>총 상품 금액</TotalPrice>
                                <TotalCountCont>
                                    <TotalCount>
                                        총 수량
                                        <span> {count}</span> 개
                                    </TotalCount>
                                    <Bar>|</Bar>
                                    <TotalPriceTag>
                                        {loadData.price * count}<span>원</span>
                                    </TotalPriceTag>
                                </TotalCountCont>
                            </TotalPriceCont>
                            <ButtonCont>
                                <BtnBuy>바로 구매</BtnBuy>
                                <BtnWhite text="장바구니"/>
                                <BtnWhite text="찜"/>
                            </ButtonCont>
                            
                        </TxtSection>
                    </InfoSection>
                    
                    <DetailTit>상품 정보</DetailTit>
                    
                    <img src = {"https://test.api.weniv.co.kr/" + loadData.detailInfoImage[0]} alt="ff"></img>
                    <img src = {"https://test.api.weniv.co.kr/" + loadData.detailInfoImage[1]} alt="ff"></img>
                    

                </>
            : <FailLoadData />
            }
        </DetailModal>
    )
}