import "./nav.css"
import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <>
        <nav>
            <h1>MyLife</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
            </div>
        </nav>
        </>
     );
}
 
export default Nav;