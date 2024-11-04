import React, { useState, useEffect } from "react";
import ToText from "../../utils/ToText";
import FadeInSection from "../../utils/FadeIn";

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
            <div key={index} className='hover:text-slate-100 hover:opacity-50 hover:scale-105 transition duration-500'>
                <a href={post.link} rel='noreferrer' target='_blank' className='block'>
                    <h6 className="mb-2">
                        {post.title}
                        <span className="italic"> ({calculateReadTime(ToText(post.description))} minute read)</span>
                    </h6>
                    <p className='hidden md:block font-light'>{`${ToText(post.description.substring(0, 250))}...`}</p>
                </a>
            </div>
        ));
    }
};

    return (
        <FadeInSection>
            <div id="blog" className="min-h-screen flex flex-col justify-center space-y-4 text-left">
                <h2 className="text-4xl tracking-wide lowercase mb-6">My two cents ...</h2>
                {displayBlogs()}
            </div>
        </FadeInSection>
    );
}

export default Blog;
