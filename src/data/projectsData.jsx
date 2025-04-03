const projects = [
    {
        id: 1,
        title: "Learn Yoga Online",
        github: "https://github.com/samanthacabrera/yoga-library",
        link: "https://learnyoga.online/",
        wip: true,
        deployed: true,
        contribution: "Sole Developer",
        description: "A structured yoga resource designed to provide beginners with a holistic foundation in yoga. In addition to a categorized library of poses with clear instructions, the platform includes lessons on foundational topics such as breathwork, alignment, and yoga philosophy. With a user-friendly search function and an emphasis on accessibility, it serves as a comprehensive starting point for those new to yoga.",
        tags: ["UX/UI", "Frontend", "Web App", "SEO" ],
        projectType: "Yoga Pose Library Web App",
        techStack: ["React", "Vite", "Tailwind CSS"],
        features: [
            "Dynamic yoga pose library with structured JSON data for 50+ essential yoga poses",
            "Interactive quiz component using React state to track user responses and validate answers.",
            "SEO-optimized metadata and structured data for better search engine visibility.",
            "Fast API integration for potential backend expansion with Node.js and MongoDB.",
        ],
        insights: "The most challenging aspect of Learn Yoga Online was structuring and organizing a content-heavy application efficiently while maintaining performance and usability. I had to carefully design the data structure for yoga poses and optimize the search functionality to handle large datasets smoothly. Additionally, ensuring a visually appealing yet accessible UI required iterating on multiple design choices and testing responsiveness across devices. Managing state efficiently in React, especially when dealing with dynamic filtering and search, was another learning curve that improved my frontend development skills.",
        reason: "I created this project to gain experience structuring a content-heavy web application with an intuitive UI while improving my ability to handle large datasets efficiently. Additionally, as someone passionate about yoga, I wanted to build a practical resource that could help beginners and experienced practitioners alike easily navigate and learn about yoga poses."
    },
    {
        id: 2,
        title: "Calcalooza",
        github: "https://github.com/samanthacabrera/conversion-calculator",
        link: "https://calcalooza.com",
        wip: false,
        deployed: true,
        contribution: "Sole Developer",
        description: "An open-source platform designed to assist students with early math calculations. Featuring a range of calculators for unit conversions, area, volume, and more. With a focus on accessibility, the app is optimized for a smooth user experience across all devices.",
        tags: ["UX/UI", "Frontend", "Web App", "Open Source"],
        projectType: "Math Calculator Web App",
        techStack: ["React", "Vite", "Tailwind CSS"],
        features: [
            "Comprehensive collection of calculators, including unit conversions, area, and volume calculators.",
            "Responsive design optimized for mobile and desktop devices, ensuring usability on any screen size.",
            "Reusable React components for each calculator type, promoting scalability and easy maintenance.",
            "Built-in error handling and validation for accurate calculations, even with complex operations."
        ],
        insights: "Throughout the development of Calcalooza, I gained valuable experience in working with mathematical algorithms, ensuring accuracy in complex calculations, and handling edge cases. I also honed my ability to build reusable and maintainable components, which made it easier to scale the project and add new features as needed.",
        reason: "I created Calcalooza as an opportunity to refine my skills in logic-based programming and mathematical computations. By building a set of reliable calculators, I aimed to challenge myself in tackling real-world problems, focusing on precision and handling the complexities of unit conversions and diverse mathematical operations."
    },
    {
        id: 3,
        title: "Recipe Roots",
        github: "https://github.com/samanthacabrera/recipe-roots",
        link: "",
        wip: false,
        deployed: false,
        contribution: "Sole Developer",
        description: "A platform for sharing family recipes globally, allowing users to explore diverse culinary traditions. The app provides an easy-to-use interface for discovering, saving, and sharing recipes, making it a hub for food enthusiasts to connect over shared traditions.",
        tags: ["Full-Stack", "Web App", "CRUD", "Database"],
        projectType: "Recipe Sharing Platform",
        techStack: ["React", "Flask", "SQLAlchemy", "Tailwind CSS", "Clerk"],
        features: [
            "User-driven recipe submission process, allowing users to contribute and share their family dishes.",
            "Search functionality to explore recipes by ingredients, cuisine, or author",
            "Personalized features like saving favorite recipes and creating custom recipe collections.",
            "Responsive design ensuring a smooth experience on both mobile and desktop devices."
        ],
         insights: "Developing Recipe Roots helped me improve my skills in connecting front-end and back-end technologies, especially in handling dynamic content like recipes and user-generated data. I faced challenges with structuring the API to efficiently serve large amounts of recipe data while maintaining a smooth user experience. Additionally, integrating file uploads for recipe images taught me about cloud storage solutions and optimizing the backend for media handling.",
    reason: "I built Recipe Roots as a way to enhance my full-stack development skills, with a focus on building a scalable platform that could handle both structured data and user interactions. It was also an opportunity to work with both front-end and back-end technologies in a real-world project, and to practice managing database relationships effectively."
    },
    {
        id: 4,
        title: "YogiAPI",
        github: "https://github.com/samanthacabrera/yogi_api",
        link: "",
        wip: false,
        deployed: false,
        contribution: "Sole Developer",
        description: "YogiAPI is a RESTful API designed to provide comprehensive access to a diverse collection of yoga poses. It offers a simple yet efficient way to interact with pose data through clear and structured endpoints, making it an ideal resource for developers and applications that need yoga pose information.",
        tags: ["Web API", "Backend", "RESTful"],
        projectType: "Yoga Pose API",
        techStack: ["Flask", "SQLAlchemy", "Tailwind CSS"],
        features: [
            "CRUD operations for yoga poses using standard HTTP methods.",
            "Comprehensive and easy-to-navigate API documentation for seamless integration.",
            "User-friendly endpoints to browse and search for yoga poses."
        ],
        insights: "Building YogiAPI was a great introduction to creating backend services and understanding how to structure RESTful APIs. I learned how to handle CRUD operations, implement user authentication, and optimize SQL queries for better performance. Debugging CORS issues and ensuring secure data handling were crucial skills I developed during this project, which are essential when building scalable APIs.",
        reason: "I created YogiAPI to expand my backend development skills and gain hands-on experience with building RESTful APIs. It was an opportunity to understand API documentation, improve security practices, and learn how to manage databases effectively for better performance and scalability."
    },
    {
        id: 5,
        title: "RunTheCity",
        github: "https://github.com/samanthacabrera/learn2build",
        link: "",
        wip: false,
        deployed: false,
        contribution: "Sole Developer",
        description: "RunTheCity is a fitness application designed to help users discover personalized running routes throughout their city. By integrating dynamic maps and real-time geolocation data, the app provides a seamless running experience, allowing users to explore new routes, set custom paths, and track their runs with ease.",
        tags: ["Geolocation", "Mobile-First","Web App"],
        projectType: "Fitness & Navigation App",
        techStack: ["React", "Tailwind CSS", "Mapbox", "Vite"],
        features: [
            "Create and follow personalized running routes tailored to the user's preferences.",
            "Discover featured routes based on landmarks and popular running locations.",
            "Pause and resume runs seamlessly, ensuring smooth tracking and navigation."
        ],
        insights: "Integrating Mapbox to provide real-time running routes was a valuable learning experience in working with geolocation APIs and handling live data updates efficiently. I faced challenges in rendering dynamic route paths while maintaining optimal performance, especially at varying zoom levels. Additionally, managing user inputs for custom routes and ensuring smooth map interactions pushed me to improve my state management and event handling skills.",
        reason: "I created RunTheCity to explore the integration of interactive maps and geolocation-based services, while improving my skills in state management and dynamic UI design. This project allowed me to work with real-time data and focused on building a smooth user experience for people looking to explore new cities through personalized running routes, helping them discover local landmarks while staying active."
    },
    {
        id: 6,
        title: "Yarnsara",
        github: "https://github.com/samanthacabrera/ecommerce-store",
        link: "https://yarnsara-samanthacabreras-projects.vercel.app/",
        wip: false,
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
