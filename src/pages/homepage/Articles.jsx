import React, { useState, useEffect } from "react";
import ToText from "../../utils/ToText";

function Articles({ showYogaOnly }) {
    const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@samantha.n.cabrera";

    const [blog, setBlog] = useState({
        yogaArticles: [],
        devArticles: [],
        error: null
    });

    useEffect(() => {
        fetch(mediumURL)
            .then(response => response.json())
            .then(data => {
                // convert title to lower case and check if it includes "Beyond The Mat"
                const yogaArticles = data.items.filter(post => post.title.toLowerCase().includes('beyond the mat'));
                // filter non-yoga (dev) articles
                const devArticles = data.items.filter(post => !post.title.toLowerCase().includes('beyond the mat'));

                setBlog({
                    yogaArticles,
                    devArticles,
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

    const displayArticles = (articles) => {
        return articles.map((post, index) => (
            <div key={index} className='text-left mx-4 hover:text-lime-500 hover:scale-105 transition duration-500'>
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

    const articlesToDisplay = showYogaOnly ? blog.yogaArticles : blog.devArticles;

    return (
        <div className="flex flex-col space-y-4">
            <h2 className="text-center text-lg md:text-2xl my-8">
                My Two Cents
            </h2>
            {articlesToDisplay.length > 0 ? displayArticles(articlesToDisplay) : <p>No articles found.</p>}
        </div>
    );
}

export default Articles;
