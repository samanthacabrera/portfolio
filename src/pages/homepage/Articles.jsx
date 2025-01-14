import React, { useState, useEffect } from "react";
import ToText from "../../utils/ToText";

function Articles() {
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
            <div key={index} className='text-left max-w-sm md:max-w-4xl hover:text-lime-500 hover:scale-105 transition duration-500'>
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

            <div className="flex flex-col justify-center items-center space-y-4 md:space-y-12 h-[90vh]">
                <h2 className="text-4xl pb-4">My two cents...</h2>
                {displayBlogs()}
            </div>
    );
}

export default Articles;
