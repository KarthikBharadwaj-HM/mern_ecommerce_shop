const Ratings = ({ value, text }) => {
  const getRatings = () =>
    [1, 2, 3, 4, 5].map((i) => (
      <i
        key={i}
        className={
          value >= i
            ? 'fa fa-star'
            : value >= i - 0.5
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
        }
        style={{ color: '#f8e825' }}
      ></i>
    ));

  return (
    <div className='rating'>
      {value && <span>{getRatings().map((rating) => rating)}</span>}
      {text && <span style={{ paddingLeft: '0.5rem' }}>{text}</span>}
    </div>
  );
};
export default Ratings;
