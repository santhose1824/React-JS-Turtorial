import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Post.css";
const Post = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(null);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
        console.log(products);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError(error);
      });
  }, [loading,error,products]);
  if(loading) return <div>Loading.....</div>
  if(error) return <div>Error: {error.message}</div>;
  return (
    <div className="gird">
      {products.map((product) => {
        return (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt="img" />
            <p className="title">{product.title}</p>
            <div className="price-category">
              <p className="price">Rs.{product.price}</p>
              <p className="category">{product.category}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
