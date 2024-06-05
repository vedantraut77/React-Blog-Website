import BlogList from './blogList';
import useFetch from './useFetch';
import { useState } from 'react';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    const [blogData, setblogData] = useState(blogs);
    // const { category, setCategory } = useState('');
    // const handleFilter = (category) => {

    //     if (category === blogData.category) {
    //         fetch('http://localhost:8000/blogs/' + blogData.id,
    //             {
    //                 method: "GET"
    //             })
    //     }
    //     console.log()
    // }

    return (
        <div className='home'>
            {error && <div>{error}</div>}
            {isPending && <div>Loading......</div>}
            {blogData && <BlogList blogs={blogData} title="Today's Blogs:" />}
        </div>
    );
}

export default Home;

