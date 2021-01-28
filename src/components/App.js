import '../Style.scss';
import Banner from './banner/Banner.js'
import Image from'./image/Image.js'
import Navbar from './navbar/Navbar.js'
import DropDownButton from './dropDownButton/DropDownButton.js'


function App() {
  return (
    <div className="App">
      <Banner/>
      <div className="content">
      <Navbar/></div>
      
    </div>
  );
}

export default App;
  