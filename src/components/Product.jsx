import React from 'react'
import {Card} from "react-bootstrap"
import Rating from './Rating'

function Product({productData}) {
  return (
    <Card className='my-3 p-3'>
      <a href={`/product/${productData.id}`}>
        <Card.Img src={productData.image}  />
      </a>
      <Card.Body>
      <a href={`/product/${productData.id}`}>
        <Card.Title as = "div">
            <strong>{productData.name}</strong>
        </Card.Title>
      </a>
      <Card.Text as = "div" >
        <div className='my-3 '> 
          <Rating rating = {productData.rating} reviews = {productData.numReviews} color = "#f8e825"/>
        </div>
      </Card.Text>

      <Card.Text as = "h3">
            ${productData.price}
      </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product