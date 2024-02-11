import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
const ProductImage = ({images}) => {
  

    const image = images.map((number) => ({
        src: number.url
      }));

  return (

   <Carousel style={{maxHeight:'500px',background:'tranparent'}} isAutoPlaying={true} autoPlayInterval={2000} images={image} isMaximized={false} hasMediaButton={false} hasSizeButton={false} hasIndexBoard={false}  />

   
  )
}

export default ProductImage