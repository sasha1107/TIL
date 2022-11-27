import styled from 'styled-components'

const Thumbnail = styled.img`
    border: 1px solid var(--border-color);
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
`

export default function ProductImage({thumbnailImg, productName}) {
    //https://test.api.weniv.co.kr/asset/img/5/thumbnailImg.jpg
    const url = "https://test.api.weniv.co.kr/" + thumbnailImg
    return (
        <Thumbnail src={url} alt={productName}/>
    )
}
