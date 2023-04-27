import React from 'react'
import { Row,Col,ListGroup,Button,Card,Image, ListGroupItem } from 'react-bootstrap'
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
            <strong className='fw-bold'>Price:</strong> £{product.price}
            </ListGroup.Item>

            <ListGroup.Item className='listItem'>
              <strong className='fw-bold'>Description:</strong>
              <div>£{product.description}</div>
            </ListGroup.Item>

          </ListGroup>

        </Col>

        <Col >
          <Card>
            <ListGroup variant='flush'>
              <ListGroupItem >
                <Row>
                  <Col>Price:</Col>
                  <Col>
                  <strong>£{product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem >
                <Row>
                  <Col>Status:</Col>
                  <Col>
                  {product.countinstock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem variant='flush'>
                <Button className=' btn-block w-100' type='button' disabled={product.countinstock === 0}>Add to cart</Button>
              </ListGroupItem>

            </ListGroup>
          </Card>
           
        </Col>

      </Row>
    </div>
  )
}

export default Product