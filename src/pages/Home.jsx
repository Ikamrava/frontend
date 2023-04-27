import React, { useEffect, useState } from 'react'
import {Row,Col} from "react-bootstrap"

import Product from '../components/Product'
import axios from "axios"



function Home() {
  const [products,setProducts]=useState([])

  useEffect(()=> {

    async function fetchProducts(){
      axios.defaults.withCredentials = true;
      const {data} = await axios.get("http://127.0.0.1:8000/api/products")
      setProducts(data)
    }
    fetchProducts()
  },[])

    
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