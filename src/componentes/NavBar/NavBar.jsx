import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
    <header>
        <Link to="/">
            <h1>Honda Online</h1>
        </Link>

        <nav>
            <ul>
                <li> 
                    <NavLink to="/categoria/2"> Enduro </NavLink>
                </li>

                <li>  
                    <NavLink to="/categoria/3"> Pista </NavLink>
                </li>
                
            </ul>
        </nav>

        <CartWidget/>
    </header>
)
}

export default NavBar