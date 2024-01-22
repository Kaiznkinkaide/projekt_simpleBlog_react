import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <>
        <nav>
            <h1>MyLife</h1>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
        </nav>
        </>
     );
}
 
export default Nav;