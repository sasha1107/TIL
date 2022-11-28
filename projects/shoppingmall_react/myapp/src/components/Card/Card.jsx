import { useState } from 'react'
import { CardLi, BtnLike, ProductTitle } from './CardStyle'
import ProductImage from './ProductImage/ProductImage'
import ProductName from './ProductName/ProductName'
import ProductPrice from './ProductPrice/ProductPrice'
import { Link } from 'react-router-dom'

export default function Card({productName, price, thumbnailImg,id}) {
    const [heart, setHeart] = useState(false)

    function handleLikeBtn(){
        heart ? setHeart(false) : setHeart(true)
    }
    const url = "/TIL/projects/shoppingmall_react/product/" + id;
    
    return (
        <CardLi>
            <Link to={url} data={productName}>
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