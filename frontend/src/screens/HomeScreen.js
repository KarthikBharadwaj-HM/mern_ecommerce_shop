import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';

//app
import Product from '../compenents/Product';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    })();
  }, []);

  return (
    <>
      <Row>
        <Col>
          <h1>Latest Products</h1>
        </Col>
      </Row>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default HomeScreen;
