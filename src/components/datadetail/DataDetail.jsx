import { Link, useParams } from "react-router-dom";
import datas from "../../data/data.js"


const DataDetail = ({title, published_date , author, description, img, id}) => {
    const idParam = useParams()

    const gesuchteData = datas.filter((data) =>{
        return data.id.toString() === idParam.id
    })

    return ( 
        <>
        <img src={gesuchteData[0].img_url}/>
        <h3>{gesuchteData[0].title}</h3>
        <h3>{gesuchteData[0].author}</h3>
        <h3>{gesuchteData[0].published_date}</h3>
        <h3>{gesuchteData[0].description}</h3>
        <Link to={`/blog`}>Back</Link>
        </>
     );
}
 
export default DataDetail;