import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Rating from '../components/Rating';

function HomeScreen(props) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const category = props.match.params.id ? props.match.params.id : '';
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(category));

    return () => {
      //
    };
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };

  return (
    <>
      {category && <h2>{category}</h2>}

      <section>
      <div className="home-video">
        <video data-autoplay="" id="bgvid" playsInline="" autoPlay={true} muted={true} loop={true} className="section-hero__video-background           
        background-position-small-horizontal-50
        background-position-small-vertical-50
        background-position-medium-horizontal-50
        background-position-medium-vertical-50
        background-position-large-horizontal-50
        background-position-large-vertical-50
        ">
        <source src="../images/videohome.mp4" type="video/mp4" />
        </video>
      </div>
    
      <div
        className="row"
        style={{width: "80%",
      margin: "0 auto"}}
      >

        <div className="col" id="quote">
          <div className="overlay-image">
            <a href="#">
              <img className="image" src="../images/banner-frase2.jpg" alt="Alt text" />
              <div className="normal">
                <div className="text">“So long as the new moon returns in heaven a bent, beautiful bow, so long will the fascination of archery keep hold in the hearts of men.” —Maurice Thompson</div>
              </div>
              <div className="hover">
                <img
                  className="image"
                  src="../images/banner-frase1.jpg"
                  alt="Alt text hover"
                />
                <div className="text">“So long as the new moon returns in heaven a bent, beautiful bow, so long will the fascination of archery keep hold in the hearts of men.” —Maurice Thompson</div>
              </div>
            </a>
          </div>
        </div>
      </div>
        
    </section>

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ul className="products">
          {products.map((product) => (
            <li key={product._id}>
              <div className="product">
                <Link to={'/product/' + product._id}>
                  <img
                    className="product-image"
                    src={product.image}
                    alt="product"
                  />
                </Link>
                <div className="product-name">
                  <Link to={'/product/' + product._id}>{product.name}</Link>
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">${product.price}</div>
                <div className="product-rating">
                  <Rating
                    value={product.rating}
                    text={product.numReviews + ' reviews'}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default HomeScreen;
