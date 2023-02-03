import React, { useState } from 'react'
import { CardLi, BtnLike, ProductTitle } from './CardStyle'
import ProductImage from './ProductImage/ProductImage'
import ProductName from './ProductName/ProductName'
import ProductPrice from './ProductPrice/ProductPrice'
import { Link } from 'react-router-dom'

interface CardProps {
    productName: string,
    price: number,
    thumbnailImg: string,
    id: number
}

export default function Card({productName, price, thumbnailImg,id}: CardProps) {
    const [heart, setHeart] = useState(false)

    function handleLikeBtn(){
        heart ? setHeart(false) : setHeart(true)
    }
    const url = "/TIL/projects/shoppingmall_react/product/" + id;
    
    return (
        <CardLi>
            <Link to={url}>
            <ProductImage {...{thumbnailImg, productName}}/>
            </Link>
            <ProductTitle>
                    <ProductName {...{productName}}/>
                <BtnLike onClick={handleLikeBtn} toggle={heart}>
                </BtnLike>
            </ProductTitle>
            <ProductPrice {...{price}}/>       
        </CardLi>
    )
}