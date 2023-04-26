import React from 'react'
import {Row,Col} from "react-bootstrap"
import products from "../products"
import Product from '../components/Product'


function Home() {
    
  return (
    <div>
        <h1>Latest Products</h1>
        <Row>
          {products.map(product => (
            <Col sm={12} md={6} lg={4} xl={3} key={product.id} >
              <Product productData = {product}/>
            </Col>
          ))}
        </Row>
    </div>
  )
}

export default Home