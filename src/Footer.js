import React from "react";

function Footer() {
    return(
        <div id="footer" className="flex flex-col items-center py-6">
            <div className="flex mb-4">
                <a href="https://linkedin.com/in/samcabreraa" target="_blank" rel="noopener noreferrer" className="mr-4 text-gray-700 hover:text-gray-900">LinkedIn</a> 
                <a href="https://github.com/samanthacabrera" target="_blank" rel="noopener noreferrer" className="mr-4 text-gray-700 hover:text-gray-900">GitHub</a>
                <a href="https://medium.com/@samantha.n.cabrera" target="_blank" rel="noopener noreferrer" className="mr-4 text-gray-700 hover:text-gray-900">Medium</a> 
                <a href="https://leetcode.com/samcab/" target="_blank" rel="noopener noreferrer" className="mr-4 text-gray-700 hover:text-gray-900">LeetCode</a> 
                <a href="https://open.spotify.com/user/samantha.n.cabrera?si=mAb874ggRgu9g60cUOlMPw" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">Spotify</a>        
            </div>
            <p>Made with ❤️ by Sam</p>
        </div>
    )
}

export default Footer;