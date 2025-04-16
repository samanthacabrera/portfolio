import React, { useState, useEffect } from "react";
import ToText from "../../utils/ToText";

function Articles() {
    const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@samantha.n.cabrera";

    const [blog, setBlog] = useState({
        articles: [],
        error: null
    });

    useEffect(() => {
        fetch(mediumURL)
            .then(response => response.json())
            .then(data => {
                if (data.items) {
                    setBlog({ articles: data.items });
                } else {
                    setBlog({ error: "No articles found" });
                }
            })
            .catch(err => {
                setBlog({ error: err.message });
            });
    }, []);

    const calculateReadTime = (text) => {
        const wordsPerMinute = 250;
        const words = text.split(' ').length;
        return Math.ceil(words / wordsPerMinute);
    };

    const displayArticles = (articles) => {
        const hoverClasses = [
            "hover:text-lime-600", 
            "hover:text-pink-600", 
            "hover:text-yellow-500", 
            "hover:text-cyan-600", 
            "hover:text-orange-600"
        ];
        return articles.map((post, index) => (
            <div key={index} className={`text-lg ${hoverClasses[index % hoverClasses.length]} transition duration-300`}>
                <a href={post.link} rel='noreferrer' target='_blank' className='block'>
                    <h6 className="mb-1">
                        {post.title}
                        <span className="italic"> ({calculateReadTime(ToText(post.description))} minute read)</span>
                    </h6>
                    <p className='hidden'>{`${ToText(post.description.substring(0, 86))}...`}</p>
                </a>
            </div>
        ));
    };

    return (
        <div className="flex flex-col w-full space-y-4">
            <h2 className="text-center text-lg md:text-2xl tracking-wider my-8">My Two Cents ...</h2>
            {blog.error ? <p>{blog.error}</p> : blog.articles.length > 0 ? displayArticles(blog.articles) : <p>No articles found.</p>}
        </div>
    );
}

export default Articles;
