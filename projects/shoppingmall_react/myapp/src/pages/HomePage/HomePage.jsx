import { useState, useContext } from 'react'
import { callAPIResponse } from '../../database/callAPI.js'
import { MainSection, ProductList } from './HomePageStyle'
import Card from '../../components/Card/Card'
import BtnLink from '../../components/BtnLink/BtnLink'
import FailLoadData from '../../components/Shared/FailLoadData/FailLoadData'

export default function HomePage() {
    const [loadData, setLoadData] = useState(null)

    useContext(callAPIResponse).then(data => {
        console.log('셋팅');
        setLoadData(data)
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