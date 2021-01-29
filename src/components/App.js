import '../Style.scss';
import Banner from './banner/Banner.js'

import Navbar from './navbar/Navbar.js'
import ProductCardWrapper from './productCardWrapper/ProductCardWrapper';


function App() {
  return (
    <div className="App">
      <Banner />
      <div className="content-n-nav">
        <Navbar />
        <div className="content">
          <div className="prom-header">
            <h4>Promocje</h4>
            <div></div>
          </div>
          <ProductCardWrapper/>
        </div>



      </div>
      <footer><h5>made by: przemyslaw kolczynski</h5></footer>

    </div>
  );
}

export default App;
