// import React, { useState, useEffect } from "react";
// import ItemCount from "../../components/ItemCount/ItemCount";
// import ItemList from "../../components/ItemList/ItemList";

// const ItemListContainer = () => {
//   const [productList, setProductList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchProducts = async () => {
//     try {
//       const response = await fetch('https://fakestoreapi.com/products');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       setProductList(data);
//       setLoading(false);
//     } catch (error) {
//       setError(error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h1>Item List Container</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>Error: {error.message}</p>
//       ) : (
//         <>
//           <ItemCount />
//           <ItemList productList={productList} />
//         </>
//       )}
//     </div>
//   );
// };

// export default ItemListContainer;
import React, { useState, useEffect } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import ItemCount from '../../components/ItemCount/ItemCount';
import './styles.css';

const ItemListContainer = () => {
  const [listaproducto, setListaproducto] = useState([]);

   const fetchProducts = () => {
    fetch(`https://fakestoreapi.com/products/`)
      .then((response) => response.json())
      .then((data) => setListaproducto(data))
      .catch((error) => console.log(error));
   
   }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
    <h2 className="item-list-title">Productos</h2>
    
    <div className="item-list-container">
      <ItemList listaproducto={listaproducto} />
    </div>
    </div>
  );
};

export default ItemListContainer;