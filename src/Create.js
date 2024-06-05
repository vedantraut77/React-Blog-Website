import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [wallpaper, setWallpaper] = useState('');
    const [category, setCategory] = useState('');
    const navigate = useNavigate();

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setWallpaper(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        const blog = { title, body, author, wallpaper, category };

        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },//tells browser to parse it as json data
            body: JSON.stringify(blog) //converts string data into json format
        }).then(() =>
            navigate('/')
        );
    };

    return (
        <div className="create">
            <h2>Create a new blog:</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />

                <label>Write content:</label>
                <textarea type="text" value={body} onChange={(e) => setBody(e.target.value)}></textarea>

                <label>Blog author:</label>
                <input type="text" required value={author} onChange={(e) => setAuthor(e.target.value)} />

                <label>Select Category:</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Sports">Sports</option>
                    <option value="Technology">Technology</option>
                    <option value="Historic">Historic</option>
                    <option value="Politics">Politics</option>
                    <option value="Miscellenous">Miscellenous</option>
                    <option value="None">None</option>
                </select>

                <label>Select Image:</label>
                <input type="file" accept="image/*" onChange={handleImageUpload} />
                {wallpaper && <img src={wallpaper} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '100px' }} />}

                <button type="submit">Upload</button>
            </form>
        </div>
    );
}

export default Create;

