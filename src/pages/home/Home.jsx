import { Link } from "react-router-dom";
import Nav from "../../components/nav/Nav";

const Home = () => {
    return ( 
        <>
       
        <Nav/>
        <h1>HOME</h1>
        <Link to="/blog"><button>Go to Blog</button></Link>
        </>
     );
}
 
export default Home;