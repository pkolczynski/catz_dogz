import DropDownButton from '../dropDownButton/DropDownButton';
import Searchbar from '../searchbar/Searchbar';
import './Navbar.scss';
import cartIcon from '../../resources/cart.png';
const Navbar = () =>{
    return (
        <nav>
            <DropDownButton className='koty'/>
            <DropDownButton className='psy'/>
            <Searchbar/>
            <div className="button-cart">
                <h4>Koszyk</h4>
                <img src={cartIcon} alt="KOSZYK" className="menu-cart"/>
            </div>
            <h4 className="button-account">Moje konto</h4>
        </nav>
    )
}

export default Navbar;