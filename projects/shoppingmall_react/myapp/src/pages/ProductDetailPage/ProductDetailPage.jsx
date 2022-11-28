import { useParams } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { callAPIResponse } from '../../database/callAPI.js'
import FailLoadData from '../../components/Shared/FailLoadData/FailLoadData.jsx'
import BtnWhite from '../../components/BtnWhite/BtnWhite.jsx'
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


export default function ProductDetailPage() {
    const [loadData, setLoadData] = useState(null)
    const [count, setCount] = useState(0)
    const parameter = useParams().id; 
    console.log(parameter);
    useContext(callAPIResponse).then(data => {
        console.log('셋팅');
        setLoadData(data[parameter-1])
    })


    function handleCountSub(){
        setCount(count - 1)
    }
    function handleCountAdd(){
        setCount(count + 1)
    }
    useEffect(() => {
        console.log(count);
    }, [count])
    

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