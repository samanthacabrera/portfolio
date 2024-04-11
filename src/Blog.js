import React, { useState, useEffect } from "react";
import ToText from "./ToText";
import './App.css';

function Blog() {
    const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@samantha.n.cabrera";

    const [blog, setBlog] = useState({
        items: [],
        isLoading: true,
        error: null
    });

    useEffect(() => {
        fetch(mediumURL)
            .then(response => response.json())
            .then(data => {
                const blogs = data.items;
                setBlog({
                    items: blogs,
                    isLoading: false
                });
            })
            .catch(err => {
                setBlog({ error: err.message });
            });
    }, []);

    const calculateReadTime = (text) => {
        const wordsPerMinute = 250; 
        const words = text.split(' ').length;
        const readTimeMinutes = Math.ceil(words / wordsPerMinute);
        return readTimeMinutes;
    };

    const displayBlogs = () => {
        if (blog.items) {
            return blog.items.map((post, index) => (
                <div key={index}>
                    <div className='card-body'>
                        <h1 className='card-title text-2xl'>
                            <a href={post.link} className='postTitle' rel='noreferrer' target='_blank'>{post.title}</a>
                        </h1>
                        <p className='card-text'>{`${ToText(post.description.substring(0, 200))}...`}</p>
                        <p>({calculateReadTime(ToText(post.description))} minute read)</p>
                    </div>
                </div>
            ));
        }
    };

    return (
        <div id="blog" className='blogs'>
            Some of my writings:
            <div className='container'>
                {blog.isLoading ? 'Loading...' : displayBlogs()}
            </div>
        </div>
    );
}

export default Blog;



