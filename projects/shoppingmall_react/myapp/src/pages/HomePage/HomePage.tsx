import React from 'react'
import { useState, useContext } from 'react'
import { callAPIResponse } from '../../database/callAPI'
import { MainSection, ProductList } from './HomePageStyle'
import Card from '../../components/Card/Card'
import BtnLink from '../../components/BtnLink/BtnLink'
import FailLoadData from '../../components/Shared/FailLoadData/FailLoadData'


interface Data {
    id: number,
    productName: string,
    price: number,
    thumbnailImg: string,
}

export default function HomePage() {
    const [loadData, setLoadData] = useState<Data[] | null>(null);

    useContext(callAPIResponse).then(data => {
        console.log('셋팅');
        // console.log(data);
        setLoadData(data);
    })

    return (
        <MainSection>
        {
            loadData !== null ? 
                <>
                    <ProductList>
                        {loadData.map(item =>
                        <Card key={item.id} {...item}/>)}
                    </ProductList>
                    <BtnLink className="cart"/>
                </>
            : <FailLoadData />
        }
        </MainSection>
    )
}