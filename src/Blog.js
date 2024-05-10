import React, {useState, useEffect} from "react";
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
        setBlog({error: err.message});
      });
  }, []);

  const calculateReadTime = (text) => {
    const wordsPerMinute = 250;
    const words = text.split(' ').length;
    const readTimeMinutes = Math.ceil(words / wordsPerMinute);
    return readTimeMinutes;
  };

<<<<<<< HEAD
    const displayBlogs = () => {
        if (blog.items) {
            return blog.items.map((post, index) => (
                <div key={index}>
                    <div className='card-body p-4'>
                        <h1 className='card-title text-lg mb-4 hover:underline decoration-current'>
                            <a href={post.link} className='postTitle' rel='noreferrer' target='_blank'>{post.title}</a>
                        </h1>
                        <p className='card-text'>{`${ToText(post.description.substring(0, 500))}...`}</p>
                        <p>({calculateReadTime(ToText(post.description))} minute read)</p>
                    </div>
                </div>
            ));
        }
    };

return (
        <div id="blog" className="blogs">
           <h2 className="subHeading font-bold text-9xl lowercase">Check this out</h2>
            <div className='space-y-10'>
                {blog.isLoading ? 'Loading...' : displayBlogs()}
            </div>
=======
  const displayBlogs = () => {
    if (blog.items) {
      return blog.items.map((post, index) => (
        <div key={index}>
          <div className='card-body p-4'>
            <h1 className='card-title text-lg mb-4 hover:underline decoration-current'>
              <a href={post.link} className='postTitle' rel='noreferrer' target='_blank'>{post.title}</a>
            </h1>
            <p className='card-text'>{`${ToText(post.description.substring(0, 500))}...`}</p>
            <p>({calculateReadTime(ToText(post.description))} minute read)</p>
          </div>
>>>>>>> fcfdafb9507fc833128dd730cbcb1184a57607c5
        </div>
      ));
    }
  };

  return (
    <div id="blog" className="blogs">
      <div className="subHeading pt-24 md:pb-12  md:text-9xl text-7xl lineheight">Check this out</div>
      <div className='space-y-10'>
        {blog.isLoading ? 'Loading...' : displayBlogs()}
      </div>
    </div>
  );
}

export default Blog;



