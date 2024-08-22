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
                <div key={index} className='hover:text-slate-200 hover:scale-105 transition duration-500' >

                    <h6 className="text-base md:text-2xl mb-2">
                        <a href={post.link}  rel='noreferrer' target='_blank'>{post.title}</a>
                        <span className="italic"> ({calculateReadTime(ToText(post.description))} minute read)</span>
                    </h6>

                    <p className='hidden md:block'>{`${ToText(post.description.substring(0, 500))}...`}</p>
                </div>
            ));
        }
    };

    return (
        <FadeInSection>
            <div id="blog" className="container space-y-10 sm:space-y-20 text-center sm:text-left">
                <h2 className="sub-heading">Articles</h2>
                <p>Here, you'll find my collection of articles ranging from tutorials to histories of various technologies.</p>
                {displayBlogs()}
            </div>
        </FadeInSection>
    );
}

export default Blog;
