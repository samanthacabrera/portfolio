const projects = [
    {
        id: 1,
        title: "Learn Yoga Online",
        github: "https://github.com/samanthacabrera/yoga-library",
        link: "https://learnyoga.online/",
        wip: true,
        deployed: true,
        contribution: "Sole Developer",
        description: "A yoga pose glossary designed to help users learn and explore yoga poses with ease.",
        tags: ["Web App"],
        projectType: "Yoga Pose Library Web App",
        techStack: ["React", "Vite", "Tailwind CSS"],
        features: [
            "Comprehensive glossary featuring the top 100 common yoga poses.",
            "Search functionality for quickly finding specific poses.",
            "Detailed pose descriptions and benefits.",
            "Responsive design optimized for mobile and desktop."
        ],
        insights: "The most challenging aspect of Learn Yoga Online was structuring and organizing a content-heavy application efficiently while maintaining performance and usability. I had to carefully design the data structure for yoga poses and optimize the search functionality to handle large datasets smoothly. Additionally, ensuring a visually appealing yet accessible UI required iterating on multiple design choices and testing responsiveness across devices.",
        reason: "To gain experience structuring a content-heavy web application with an intuitive UI, while improving my ability to handle large datasets efficiently."
    },
    {
        id: 2,
        title: "Calcalooza",
        github: "https://github.com/samanthacabrera/conversion-calculator",
        link: "https://calcalooza.com",
        wip: false,
        deployed: true,
        contribution: "Sole Developer",
        description: "A responsive website featuring a variety of math calculators, including unit conversion, area, volume, and more.",
        tags: ["Web App"],
        projectType: "Math Calculator Web App",
        techStack: ["React", "Vite", "Tailwind CSS"],
        features: [
            "Provides calculators for different mathematical operations.",
            "User-friendly interface for easy navigation.",
            "Responsive design for accessibility across devices.",
            "Categories for various calculator types including unit conversion, area, and volume."
        ],
        insights: "The primary challenge was ensuring each calculator delivered accurate results across a range of mathematical operations, which required rigorous testing and debugging. Implementing unit conversions introduced additional complexity, as I had to account for edge cases and floating-point precision issues. Additionally, I focused on creating a modular and reusable component system to maintain scalability as I expanded the calculator collection.",
        reason: "To improve logic-based programming and precision in mathematical computations while practicing modular component design."    },
    {
        id: 3,
        title: "Recipe Roots",
        github: "https://github.com/samanthacabrera/recipe-roots",
        link: "",
        wip: false,
        deployed: false,
        contribution: "Sole Developer",
        description: "A web application for sharing family recipes to a global audience.",
        tags: ["Full-Stack Web App"],
        projectType: "Recipe Sharing Platform",
        techStack: ["React", "Flask", "SQLAlchemy", "Tailwind CSS"],
        features: [
            "Discover family recipes from various cultures around the world.",
            "Explore recipes from a randomly featured country.",
            "Share your own family recipes with the community.",
            "Users can save their favorite recipes for quick access.",
            "Interactive UI for guiding users through recipe creation."
        ],
        insights: "Connecting the front end to the back end presented challenges in handling user authentication, database queries, and ensuring a seamless user experience. I had to structure the API endpoints efficiently to allow for quick retrieval of recipes and user-generated content. Handling media uploads (such as images of dishes) required learning about cloud storage solutions and optimizing file handling within the backend.",
        reason: "To practice full-stack development, improve database structuring, and handle user-generated content effectively."    },
    {
        id: 4,
        title: "YogiAPI",
        github: "https://github.com/samanthacabrera/yogi_api",
        link: "",
        wip: false,
        deployed: false,
        contribution: "Sole Developer",
        description: "This API provides comprehensive access to a diverse collection of yoga poses.",
        tags: ["Web API"],
        projectType: "Yoga Pose API",
        techStack: ["React", "Flask", "SQLAlchemy", "Tailwind CSS"],
        features: [
            "Use of standard HTTP methods for CRUD operations.",
            "Clear and concise documentation for all API endpoints.",
            "User-friendly interface for browsing yoga poses."
        ],
        insights: "Developing YogiAPI was my first experience creating an API, and I had to learn how to structure RESTful endpoints, implement authentication, and optimize database queries for performance. Writing clear and concise documentation also helped me understand the importance of making APIs developer-friendly. Debugging issues with CORS and ensuring secure data handling taught me valuable lessons in API security.",
        reason: "To gain hands-on experience in building and documenting a RESTful API while improving backend security and performance optimization."    },
    {
        id: 5,
        title: "RunTheCity",
        github: "https://github.com/samanthacabrera/learn2build",
        link: "",
        wip: false,
        deployed: false,
        contribution: "Sole Developer",
        description: "A fitness application to help users explore their city by providing personalized running routes.",
        tags: ["Web App"],
        projectType: "Fitness & Navigation App",
        techStack: ["React", "Tailwind CSS", "Mapbox", "Vite"],
        features: [
            "Create and follow custom running routes.",
            "Discover featured routes in your city based on landmarks.",
            "Users can pause and resume their runs seamlessly."
        ],
        insights: "Integrating Mapbox to provide real-time running routes required understanding geolocation APIs, handling live data updates efficiently, and ensuring smooth map interactions. Optimizing the rendering of route paths dynamically was a challenge, especially when adjusting for different map zoom levels. Additionally, implementing user input for custom routes forced me to improve state management and work with complex event handlers.",
        reason: "To explore working with interactive maps, geolocation-based services, and improve state management in a dynamic UI."    },
    {
        id: 6,
        title: "Yarnsara",
        github: "https://github.com/samanthacabrera/ecommerce-store",
        link: "https://yarnsara-samanthacabreras-projects.vercel.app/",
        wip: true,
        deployed: true,
        contribution: "Sole Developer",
        description: "A full-stack eCommerce platform selling 100% upcycled and hand-crocheted yoga accessories.",
        tags: ["Full-Stack Web App", "eCommerce"],
        projectType: "Sustainable eCommerce Platform",
        techStack: ["React", "Express", "MongoDB", "Stripe"],
        features: [
            "Custom eCommerce storefront with seamless checkout.",
            "Integration with Stripe for secure payments.",
            "Product listings with detailed descriptions and images."
        ],
        insights: "One of the biggest challenges was implementing secure payment processing with Stripe, as it required learning about PCI compliance, tokenization, and handling errors gracefully. Setting up a robust product catalog with efficient database queries also presented challenges, especially when integrating filtering and search functionality. Additionally, ensuring a smooth user experience throughout the checkout process required refining UI interactions and debugging edge cases.",
        reason: "To learn about payment integration, secure transactions, and optimizing database queries for an eCommerce platform."    },
    {
        id: 7,
        title: "EatBySeason",
        github: "https://github.com/samanthacabrera/eat_in_season",
        link: "",
        wip: false,
        deployed: false,
        contribution: "Sole Developer",
        description: "EatBySeason is a web app that helps users discover in-season produce based on their location, encouraging healthier and more sustainable food choices.",
        tags: ["Web App"],
        projectType: "Seasonal Produce Guide",
        techStack: ["React", "Python", "Supabase"],
        features: [
            "Discover in-season produce based on your location.",
            "Filter fruits and vegetables by type and season.",
            "Personalized seasonal produce recommendations."
        ],
        insights: "Integrating Supabase for real-time data storage and retrieval was a new experience, and I had to learn how to handle authentication, role-based access control, and efficient querying. Making the app location-aware also introduced challenges with retrieving external APIs for regional produce data. Additionally, ensuring a seamless user experience with dynamic UI updates required improving my front-end state management skills.",
        reason: "To experiment with Supabase as a backend alternative, learn about real-time data handling, and improve API integration techniques."
    },
    {
        id: 8,
        title: "Swiftle",
        github: "https://github.com/samanthacabrera/swiftle",
        link: "",
        wip: false,
        deployed: false,
        contribution: "Sole Developer",
        description: "A word game inspired by NYT's 'Connections,' where players categorize Taylor Swift lyrics into themed groups.",
        tags: ["Game", "Web App"],
        projectType: "Lyric-Based Word Game",
        techStack: ["React", "Vite", "Tailwind CSS"],
        features: [
            "Mini game with Taylor Swift lyrics grouped into hidden categories.",
            "Hints system to guide players towards correct groupings.",
            "Mobile-friendly design for easy play on any device."
        ],
        insights: "Designing an intuitive UI that makes categorizing lyrics both fun and challenging required multiple iterations and user testing. Handling state updates dynamically while ensuring smooth animations and transitions was a key focus area. Additionally, implementing a hint system that provides useful yet non-obvious clues forced me to refine my game logic and balance difficulty levels.",
        reason: "To develop better front-end game logic, improve UI/UX design for interactive applications, and refine state management techniques."
    }
];

export default projects;
