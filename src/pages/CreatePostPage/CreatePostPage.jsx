import { useState, useRef, useEffect } from "react";

export default function CreatePostPage(props) {
    const [invalidForm, setValidForm] = useState(true);
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        blog: '', 
    })

    const formRef = useRef();

    useEffect(() => {
        formRef.current.checkValidity()
        ? setValidForm(false) :
        setValidForm(true);
    }, [formData]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.handleAddPost(formData);
    }

    const handleChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.title]: evt.target.value,
            [evt.target.date]: evt.target.value,
            [evt.target.blog]: evt.target.value
        })
    }

    return (
        <>
        <h1>Create A Post</h1>
        <form ref={formRef} onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    title="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Date:</label>
                <input
                    date="date"
                    value={formData.date}
                    onChange={handleChange}
                    
                />
            </div>
            <div>
                <label>Blog Post:</label>
                <input
                    blog="blog"
                    value={formData.blog}
                    onChange={handleChange}
                    
                />
            </div>
            <button type="submit" disabled={invalidForm}>
                Create
            </button>
        </form>
        </>
    );
}