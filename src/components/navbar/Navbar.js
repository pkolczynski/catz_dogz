import DropDownButton from '../dropDownButton/DropDownButton';
import './Navbar.scss';
const Navbar = () =>{
    return (
        <nav>
            <DropDownButton type='koty'/>
            <DropDownButton type='psy'/>
        </nav>
    )
}

export default Navbar;