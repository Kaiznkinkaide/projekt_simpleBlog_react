import "./datacard.css"

import { Link } from "react-router-dom";

const DataCard = ({title, published_date , author, description, img, id}) => {
    return ( 
        <>
        <div className="dataCard">
        <img src={img} />
        <h1>{title}</h1>
        <Link to={`/blog/${id}`}>MoreInfo</Link>
        </div>
        </>
     );
}
 
export default DataCard;