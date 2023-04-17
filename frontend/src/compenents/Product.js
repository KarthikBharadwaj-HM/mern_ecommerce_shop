import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//app
import Ratings from './Ratings';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>
      <Card.Body>
        <Card.Title as='div'>
          <Link to={`/product/${product._id}`}>
            <strong>{product.name}</strong>
          </Link>
        </Card.Title>
        <Card.Text as='div'>
          <Ratings
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as='h3' style={{ paddingTop: '1rem' }}>
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Product;
