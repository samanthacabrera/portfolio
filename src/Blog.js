// import React, { useState, useEffect } from "react";
// import ToText from "./ToText";
// import './App.css';

// function Blog() {
//     const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@samantha.n.cabrera";

//     const [blog, setBlog] = useState({
//         items: [],
//         isLoading: true,
//         error: null
//     });

//     useEffect(() => {
//         fetch(mediumURL)
//             .then(response => response.json())
//             .then(data => {
//                 const blogs = data.items;
//                 setBlog({
//                     items: blogs,
//                     isLoading: false
//                 });
//             })
//             .catch(err => {
//                 setBlog({ error: err.message });
//             });
//     }, []);

//     const calculateReadTime = (text) => {
//         const wordsPerMinute = 250; 
//         const words = text.split(' ').length;
//         const readTimeMinutes = Math.ceil(words / wordsPerMinute);
//         return readTimeMinutes;
//     };

//     const displayBlogs = () => {
//         if (blog.items) {
//             return blog.items.map((post, index) => (
//                 <div key={index}>
//                     <div className='card-body p-4 border'>
//                         <h1 className='card-title text-lg mb-4 hover:underline decoration-current'>
//                             <a href={post.link} className='postTitle' rel='noreferrer' target='_blank'>{post.title}</a>
//                         </h1>
//                         <p className='card-text'>{`${ToText(post.description.substring(0, 500))}...`}</p>
//                         <p>({calculateReadTime(ToText(post.description))} minute read)</p>
//                     </div>
//                 </div>
//             ));
//         }
//     };

//     return (
//         <div id="blog" className="blogs mx-48">
           
//             <div className='space-y-10'>
//                  <h2 className="text-xl">Check out some of my writings:</h2>
//                 {blog.isLoading ? 'Loading...' : displayBlogs()}
//             </div>
//         </div>
//     );
// }

// export default Blog;



// import React, { useState, useEffect } from "react";
// import ToText from "./ToText";
// import './App.css';

// function Blog() {
//     const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@samantha.n.cabrera";

//     const [blog, setBlog] = useState({
//         items: [],
//         isLoading: true,
//         error: null
//     });

//     useEffect(() => {
//         fetch(mediumURL)
//             .then(response => response.json())
//             .then(data => {
//                 const blogs = data.items;
//                 setBlog({
//                     items: blogs,
//                     isLoading: false
//                 });
//             })
//             .catch(err => {
//                 setBlog({ error: err.message });
//             });
//     }, []);

//     const calculateReadTime = (text) => {
//         const wordsPerMinute = 250; 
//         const words = text.split(' ').length;
//         const readTimeMinutes = Math.ceil(words / wordsPerMinute);
//         return readTimeMinutes;
//     };

//     const displayBlogs = () => {
//         if (blog.items) {
//             return blog.items.map((post, index) => (
//                 <div key={index} className="shadow-md rounded-lg bg-white p-6 hover:shadow-lg transition duration-300 ease-in-out">
//                     <h1 className="text-xl font-bold mb-4 hover:underline">
//                         <a href={post.link} className="postTitle" rel="noreferrer" target="_blank">{post.title}</a>
//                     </h1>
//                     <p className="text-gray-600">{`${ToText(post.description.substring(0, 200))}...`}</p>
//                     <p className="text-gray-400 text-sm">({calculateReadTime(ToText(post.description))} minute read)</p>
//                 </div>
//             ));
//         }
//     };

//     return (
//         <div id="blog" className="blogs mx-auto max-w-screen-lg">
//             <div className="space-y-10">
//                 <h2 className="text-2xl font-semibold text-gray-800">Check out some of my writings:</h2>
//                 {blog.isLoading ? 'Loading...' : displayBlogs()}
//             </div>
//         </div>
//     );
// }

// export default Blog;

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
                <a key={index} href={post.link} target="_blank" rel="noreferrer">
                    <div className="blog-card-wrapper hover:shadow-md transition duration-300 ease-in-out">
                        <div className="blog-card bg-transparent border border-gray-200 rounded-lg p-6">
                            <h1 className="text-xl font-bold mb-4 hover:underline text-gray-800">
                                {post.title}
                            </h1>
                            <p className="text-gray-600">
                                {`${ToText(post.description.substring(0, 200))}...`}
                            </p>
                            <p className="text-gray-400 text-sm">
                                ({calculateReadTime(ToText(post.description))} minute read)
                            </p>
                        </div>
                    </div>
                </a>
            ));
        }
    };

    return (
        <div id="blog" className="blogs mx-auto max-w-screen-lg">
            <div className="space-y-10">
                <h2 className="text-2xl font-semibold text-gray-800">Check out some of my writings:</h2>
                {blog.isLoading ? 'Loading...' : displayBlogs()}
            </div>
        </div>
    );
}

export default Blog;
