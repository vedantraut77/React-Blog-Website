import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";


const BlogDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id,
            {
                method: "DELETE"
            }).then(() =>
                navigate('/'))
    };


    return (
        <div className="blog-Details">
            {isPending && <div> Loading...... </div>}
            {error && <div> {error} </div>}
            {blog &&
                (<article>
                    <h2> {blog.title} </h2>
                    <p>Written by: {blog.author}</p>
                    <div className="blog-body-category">Category:{blog.category}</div>
                    <div className="blog-body-content"> {blog.body}</div>
                    <button onClick={handleDelete}>Delete BLog</button>
                </article>)
            }
        </div>
    );
}

export default BlogDetails;