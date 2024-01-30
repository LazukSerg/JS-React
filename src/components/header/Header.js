import './Header.css'
import Logo from "./Logo";
import Menu from './Menu';
import Basket from './Basket';

function Header() {
    return (
        <div className='header'>
            <span className='logo'>
                <Logo />
            </span>
            <Menu />
            <span className='basket'>
                <Basket />
            </span>
        </div>
        
    )
}

export default Header;