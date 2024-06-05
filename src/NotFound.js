import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div className='notfound'>
            <h1>404</h1>
            <p>Sorry, page Not Found</p>
            <div className="notFoundLinks" ><Link to='/'>Main page</Link></div>
        </div>
    );
}

export default NotFound;