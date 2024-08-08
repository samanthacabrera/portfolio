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
                <div key={index} >

                    <h6 className="text-base md:text-2xl mb-2">
                        <a href={post.link} className='postTitle' rel='noreferrer' target='_blank'>{post.title}</a>
                        <span className="italic"> ({calculateReadTime(ToText(post.description))} minute read)</span>
                    </h6>

                    <p className='hidden md:block'>{`${ToText(post.description.substring(0, 500))}...`}</p>
                </div>
            ));
        }
    };

    return (
        <>
            <div id="blog" className="container space-y-10 md:space-y-20">
                <h2 className="subHeading lowercase md:text-9xl text-7xl">writings</h2>
                <p>Here, you'll find my collection of articles ranging from tutorials to histories of various technologies.</p>
                {displayBlogs()}
            </div>
        </>
    );
}

export default Blog;
