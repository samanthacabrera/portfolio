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
        title: "Hand Motion Tracker",
        github: "https://github.com/samanthacabrera/mediapipe-hand-tracker",
        link: "",
        wip: false,
        deployed: false,
        contribution: "Sole Developer",
        description: "A real-time hand tracking visualizer that utilizes Google's Mediapipe library to capture and display hand gestures in 3D space, allowing for intuitive interaction with the application through hand movement.",
        tags: [ "Computer Vision", "Machine Learning", "Web App"],
        projectType: "Hand Tracking Visualization",
        techStack: [ "Mediapipe", "TensorFlow", "JavaScript"],
        features: [
            "Real-time hand gesture detection and visualization using Mediapipe.",
            "Integration with web camera feeds for seamless hand tracking directly in the browser.",
            "Multiple hand tracking capability to detect and track both hands simultaneously."
            
        ],
        insights: "Developing the Mediapipe hand tracking visualizer introduced me to the world of computer vision and real-time processing. I learned how to integrate third-party libraries into my web applications, optimize performance for real-time interaction, and work with 3D visualization tools.",
        reason: "I created this project to explore the intersection of computer vision and web development. I wanted to learn how to work with real-time data to create an engaging and interactive experience, as well as improve my skills in handling 3D visualizations and integrating simple machine learning models into a frontend application."
    },
    {
        id: 3,
        title: "Algorithm Visualizer",
        github: "https://github.com/samanthacabrera/sorting-visualizer",
        link: "",
        wip: false,
        deployed: false,
        contribution: "Sole Developer",
        description: "This web app lets you see how different sorting algorithms work through interactive visualizations. It supports a variety of sorting algorithms, including Bubble Sort, Merge Sort, Quick Sort, Insertion Sort, and Selection Sort.",
        tags: ["Data Structures", "Animation", "Interactive Learning"],
        projectType: "Sorting Algorithm Visualizer",
        techStack: ["React", "Vite", "Tailwind CSS"],
        features: [
            "Interactive visualizations for five popular sorting algorithms: Bubble Sort, Merge Sort, Quick Sort, Insertion Sort, and Selection Sort.",
            "Step-by-step animation highlighting the comparisons and swaps made by the algorithm.",
            "Clear, concise explanations for each algorithm to aid understanding during the animation.",
            "Adjustable animation speed to observe algorithm behavior at different rates."

        ],
        insights: "Building this project gave me a deeper understanding of how sorting algorithms work and how to present them visually. It also allowed me to practice state management in React and improve my understanding of algorithmic performance, especially in terms of time and space complexity.",
        reason: "I built this project to deepen my understanding of sorting algorithms by seeing how they work step by step. It started as a personal learning project to explore algorithm behavior more intuitively, but I also hope it can help others who are learning these concepts too."
    },
    {
        id: 4,
        title: "Swiftle",
        github: "https://github.com/samanthacabrera/swiftle",
        link: "https://samanthacabrera.github.io/swiftle/",
        wip: false,
        deployed: true,
        contribution: "Sole Developer",
        description: "Swiftle is a lyric-based word game where players categorize Taylor Swift song lyrics into hidden thematic groups. Drawing inspiration from the NYT's 'Connections' game, Swiftle challenges users to recognize patterns in lyrics while providing an engaging and fun experience. The app offers a mobile-first design for seamless play on any device, making it accessible and easy to enjoy on the go.",
        tags: ["Game", "Web App", "UX/UI"],
        projectType: "Lyric-Based Word Game",
        techStack: ["React", "Vite", "Tailwind CSS"],
        features: [
            "Lyric-based game with Taylor Swift lyrics grouped into hidden categories for players to identify.",
            "Responsive and mobile-first design ensuring optimal play on any device, whether on a phone, tablet, or desktop.",
            "Real-time feedback to enhance user engagement and maintain the flow of the game.",
            "Timer feature to challenge players to categorize lyrics within a specific time limit."
        ],
        insights: "Swiftle challenged me to refine my front-end development skills, particularly in game logic and UI/UX design. I focused on creating dynamic state updates and smooth transitions to make the gameplay intuitive. The hint system required balancing helpful guidance with maintaining the game's challenge, which pushed me to improve my logic for interactive applications.",
         reason: "I created Swiftle because I wanted to improve my front-end game logic and UI/UX design skills for interactive applications. As a Swiftie, I also wanted to create a fun and personalized experience centered around Taylor Swift's music. The project allowed me to refine my state management techniques while building something I genuinely enjoyed."
    },
    {
        id: 5,
        title: "Yarnsara",
        github: "https://github.com/samanthacabrera/ecommerce-store",
        link: "https://yarnsara-samanthacabreras-projects.vercel.app/",
        wip: false,
        deployed: false,
        contribution: "Sole Developer",
        description: "Yarnsara is an eCommerce platform dedicated to selling 100% upcycled and hand-crocheted yoga accessories. The platform provides a user-friendly shopping experience, with a custom-built storefront, detailed product listings, and secure payment options. With a focus on sustainability, Yarnsara showcases eco-conscious products while offering seamless checkout and transaction processes.",
        tags: ["Full-Stack", "Web App", "eCommerce", "Sustainability"],
        projectType: "eCommerce Platform",
        techStack: ["React", "Express", "Node.js", "MongoDB", "Stripe"],
        features: [
            "Custom eCommerce storefront with seamless checkout and payment integration.",
            "Integration with Stripe for secure payments and transaction handling.",
            "Detailed product listings with high-quality images and comprehensive descriptions."
        ],
        insights: "Building Yarnsara provided valuable insights into the complexities of eCommerce platforms, particularly in handling secure payment processing and optimizing product catalogs. The biggest challenge was implementing Stripe for secure payment transactions while ensuring PCI compliance. I also learned how to set up efficient database queries to manage large product catalogs, integrate filtering, and implement a smooth checkout process.",
        reason: "I created Yarnsara to gain hands-on experience with full-stack eCommerce development while focusing on sustainability. I wanted to challenge myself with payment integration and database optimization, while also working on a project that aligns with my passion for both yoga and environmentally-conscious production practices."
    },
    {
        id: 6,
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
        id: 7,
        title: "RunTheCity",
        github: "https://github.com/samanthacabrera/learn2build",
        link: "",
        wip: false,
        deployed: false,
        contribution: "Sole Developer",
        description: "RunTheCity is a fitness application designed to help users discover personalized running routes throughout their city. By integrating dynamic maps and real-time geolocation data, the app provides a seamless running experience, allowing users to explore new routes, set custom paths, and track their runs with ease.",
        tags: ["Geolocation", "Mobile-First","Hackathon"],
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
        id: 8,
        title: "EatBySeason",
        github: "https://github.com/samanthacabrera/eat_in_season",
        link: "",
        wip: false,
        deployed: false,
        contribution: "Sole Developer",
        description: "EatBySeason is a web application designed to help users discover locally available, in-season produce based on their location. The platform encourages healthier and more sustainable eating habits by providing users with personalized recommendations for seasonal fruits and vegetables.",
        tags: ["Web App", "Geolocation", "Serverless"],
        projectType: "Seasonal Produce Guide",
        techStack: ["React", "Python", "Supabase"],
        features: [
            "Location-based discovery of in-season fruits and vegetables to promote seasonal eating.",
            "Filters for browsing produce by type and season, enhancing the user experience.",
            "Personalized produce recommendations tailored to regional availability and seasons."
        ],
        insights: "Developing EatBySeason gave me the opportunity to explore real-time data handling and API integrations with Supabase. One of the biggest challenges was ensuring accurate regional produce data through external APIs, as well as making the app location-aware. Additionally, refining my state management skills was essential for providing a seamless user experience with dynamic, real-time updates.",
        reason: "I created EatBySeason to deepen my knowledge of location-based services and real-time data handling, while promoting sustainable eating habits. The project allowed me to experiment with Supabase and build a helpful resource for users looking to make more eco-conscious food choices."
    },
    {
        id: 9,
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
        id: 10,
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
]

export default projects;