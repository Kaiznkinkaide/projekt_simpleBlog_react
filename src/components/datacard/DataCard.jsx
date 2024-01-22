import "./datacard.css"

import { Link } from "react-router-dom";

const DataCard = ({title, published_date , author, description, img, id}) => {
    return ( 
        <>
        <div className="dataCard">
        <img src={img} />
        <h2>{title}</h2>
        <Link to={`/blog/${id}`}>Read More</Link>
        </div>
        </>
     );
}
 
export default DataCard;