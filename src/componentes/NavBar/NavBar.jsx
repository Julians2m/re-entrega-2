import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'


const NavBar = () => {
    return (
    <header>
        <Link to="/">
            <img className='Img' src="../Logo-Honda.jpg" alt="" />
        </Link>

        <nav>
            <ul>
                <li> 
                    <NavLink to="/categoria/1"> Enduro </NavLink>
                </li>

                <li>  
                    <NavLink to="/categoria/2"> Pista </NavLink>
                </li>
                
            </ul>
        </nav>

        <CartWidget/>
    </header>
)
}

export default NavBar