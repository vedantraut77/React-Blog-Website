import { Link } from "react-router-dom";
import React from 'react';

const BlogList = ({ blogs, title }) => {
    // const { category, setCategory } = useState('');


    return (

        <div className="BlogList">


            {/* <div className="list-flex-heading">

                <div className="list-flex-heading-1" > <h2>{title}</h2> </div>

                <div className="list-flex-heading-2">

                    <div className="list-flex-heading-2-a"> <p>filter: </p> </div>

                    <div className="list-flex-heading-2-b">
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="">All</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Sports">Sports</option>
                            <option value="Technology">Technology</option>
                            <option value="Historic">Historic</option>
                            <option value="Politics">Politics</option>
                            <option value="Miscellenous">Miscellenous</option>
                        </select>
                    </div>


                </div>

            </div> */}


            {blogs.map((blog) =>
            (
                <div className="flex-container">

                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`} >

                            <div className="list-flex-container">
                                <div className="list-flex-container-1" > <h2>{blog.title}</h2> </div>
                                <div className="list-flex-container-2"> <p> {blog.category}</p> </div>
                            </div>

                            <p className="blog-preview-body">{blog.body.substring(0, 230)} ...</p>
                            <p className="blog-preview-written">Written by: {blog.author}</p>
                        </Link>
                    </div>

                    <div className="blog-preview-images">
                        {blog.wallpaper && <img src={blog.wallpaper} alt=" 404" />}
                    </div>


                </div>
            ))}
        </div>
    );
}

export default BlogList;
