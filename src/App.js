/* eslint-disable */
import React from 'react';
import { Routes , Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <>
      <Navbar />
      <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      </main>
  </>
  );
};

// function App() {
//   return (
//     <>
//       <nav className="Navbar">
//         <div className="Logo">Maths Magician</div>
//         <div className="NavMenu">
//           <Link to="/" className="Link">Home</Link>
//           <Link to="/calculator" className="Link">Calculator</Link>
//           <Link to="/quotes" className="Link">Quotes</Link>
//         </div>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/calculator" element={<Calculator />} />
//         <Route path="/quotes" element={<Quotes />} />
//       </Routes>
//     </>
//   );
// }

export default App;
