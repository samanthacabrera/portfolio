import React, { useState, useEffect } from "react";
import ToText from "./ToText";

function Blog() {
    const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@samantha.n.cabrera";

    const [blog, setBlog] = useState({
        items: [],
        error: null
    });

    useEffect(() => {
        fetch(mediumURL)
            .then(response => response.json())
            .then(data => {
                const blogs = data.items;
                setBlog({
                    items: blogs,
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
                        <h1 className='card-title text-xl text-left font-bold decoration-current'>
                            <a href={post.link} className='postTitle' rel='noreferrer' target='_blank'>{post.title}</a>
                        </h1>
                        <p className='card-text hidden md:block'>{`${ToText(post.description.substring(0, 500))}...`}</p>
                        <p className="">({calculateReadTime(ToText(post.description))} minute read)</p>
                    </div>
                </div>
            ));
        }
    };

    return (
        <>
            <div id="blog" className="container md:space-y-8 space-y-4">
                <h2 className="subHeading lowercase md:text-9xl text-7xl">writings</h2>
                <p>Here, you'll find my collection of articles ranging from tutorials to histories of various technologies.</p>
                {displayBlogs()}
            </div>
        </>
    );
}

export default Blog;
