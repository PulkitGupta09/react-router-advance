import React from "react";
import { Link } from "react-router-dom";

const productsData = [
  { id: "p1", name: "Product - 1" },
  { id: "p2", name: "Product - 2" },
  { id: "p3", name: "Product - 3" },
];
const ProductsPage = () => {
  return (
    <>
      <h1>Products Page</h1>
      <ul>
        {productsData.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`${item.id}`}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductsPage;
