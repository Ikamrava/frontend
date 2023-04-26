import React from 'react'
import { Row,Col,ListGroup,Button,Card,Image } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'
import { Link, useParams } from 'react-router-dom';


function Product() {
  const { id } = useParams();
    const product = products.find((p)=> p.id == id)
  return (
    <div className='' >
      
      <Link to = {"/"} style={{ textDecoration: 'none' }} className='btn btn-light my-3'>Go Back</Link>
      <Row>
        <Col md={6}>
           <Image src = {product.image} fluid/>
        </Col>
        <Col md={3}>

          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
            <Rating rating = {product.rating} reviews = {product.numReviews} color = "#f8e825"/>
            </ListGroup.Item>

            <ListGroup.Item>
                 Price: ${product.price}
            </ListGroup.Item>

            <ListGroup.Item>
                 Description: ${product.description}
            </ListGroup.Item>

            

          </ListGroup>

        </Col>
        <Col md={3}>
           
        </Col>
      </Row>
    </div>
  )
}

export default Product