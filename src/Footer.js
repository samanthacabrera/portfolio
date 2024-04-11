// import React from "react";
// <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"></link>

// function Footer() {
//     return(
//         <div id="footer">
//             <a href="https://linkedin.com/in/samcabreraa" target="_blank" rel="noopener noreferrer">LinkedIn</a> 
//             <a href="https://github.com/samanthacabrera" target="_blank" rel="noopener noreferrer">GitHub</a>
//             <a href="https://medium.com/@samantha.n.cabrera" target="_blank" rel="noopener noreferrer">Medium</a> 
//             <a href="https://leetcode.com/samcab/" target="_blank" rel="noopener noreferrer">LeetCode</a> 
//             <a href="https://open.spotify.com/user/samantha.n.cabrera?si=mAb874ggRgu9g60cUOlMPw" target="_blank" rel="noopener noreferrer">Spotify</a>        
//             <p>Made with heart by Sam</p>
//         </div>
//     )
// }

// export default Footer;
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
            <p className="text-gray-600">Made with ❤️ by Sam</p>
        </div>
    )
}

export default Footer;