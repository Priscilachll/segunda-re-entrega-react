// import React from "react";
// import { Link } from "react-router-dom";
// import './styles.css';

// const Navbar = () => {  
//   return (
//     <div className="navbar-container">
//       <h1 className="logo">logo</h1>
//       <nav>
//         <ul className="List-container">
//           <li>
//             <Link to='/category/electronics' className="navbar-button">
//               Electronicos
//             </Link>
//           </li>
//           <li>
//             <Link to='/category/jewelery' className="navbar-button">
//               Joyeria
//             </Link>
//           </li>
//           <li>
//             <Link to="/category/men's-clothing" className="navbar-button">
//               Ropa de hombre
//             </Link>
//           </li>
//           <li>
//             <Link to="/category/women's-clothing" className="navbar-button">
//               Ropa de mujer
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <button className="logo">
        <img src="http://cadep.ar/img/cadep_logo.png" alt="" width="85px" height="100px" />
      </button>
      <h1 className="logo">CADEP - TIENDA OFICIAL</h1>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink activeclassname="active" to={`category/women's-clothing`}>Mujer</NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="/category/men's-clothing">Hombre</NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to='/category/electronics'>Electrónico</NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to='/category/jewelery'>Accesorio</NavLink>
          </li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Navbar;

