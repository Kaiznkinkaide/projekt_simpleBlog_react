import { useState } from "react";
import DataCard from "../../components/datacard/DataCard.jsx";
import Nav from "../../components/nav/Nav";
import datas from "../../data/data.js"
import "./blog.css"

const Blog = () => {

    const [data, setData] = useState(datas)

    return ( 
        <>
        <Nav/>
        <h1>BLOG</h1>
        <div className="blogList">
        {data.map((data, index)=>{
            return(
                <div key={index}>
                    <DataCard
                    id={data.id}
                    img={data.img_url}
                    title={data.title}
                    published_date={data.published_date}
                    author={data.author}
                    description={data.description}/>
                    </div>
            )
        })}
        </div>
        </>
     );
}
 
export default Blog;