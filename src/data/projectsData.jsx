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
        overview: {
            tags: ["Web App"],
            projectType: "Yoga Pose Library Web App",
            techStack: ["React", "Vite", "Tailwind CSS"],
            features: [
                "Comprehensive glossary featuring the top 100 common yoga poses.",
                "Search functionality for quickly finding specific poses.",
                "Detailed pose descriptions and benefits.",
                "Responsive design optimized for mobile and desktop."
            ]
        },
        insights: "The most challenging aspect of Learn Yoga Online was the extensive research required for each pose. On average, I spent 4 to 5 hours per pose to ensure the descriptions were accurate, detailed, and informative. This involved consulting multiple reliable sources to provide users with clear guidance on the pose's execution, benefits, and variations. This meticulous process deepened my understanding of yoga and reinforced the importance of accuracy in educational content."
    },
    {
        id: 2,
        title: 'Calcalooza',
        github: 'https://github.com/samanthacabrera/conversion-calculator',
        link: 'https://calcalooza.com', 
        wip: false,
        deployed: true,
        contribution: "Sole Developer",
        description: 'A responsive website featuring a variety of math calculators, including unit conversion, area, volume, and more.',
        overview: {
            tags: [],
            projectType: "Web App",
            techStack: ['React', 'Vite', 'Tailwind CSS'],
            features: [
                'Provides calculators for different mathematical operations.',
                'User-friendly interface for easy navigation.',
                'Responsive design for accessibility across devices.',
                'Categories for various calculator types including unit conversion, area, and volume.'
            ]
        },
        insights: 'The primary challenge was ensuring each calculator delivered accurate results across all operations. Structuring the UI to accommodate a wide range of tools while keeping navigation simple and efficient was a focus. I aimed on creating a seamless user experience by organizing the calculators into categories and optimizing for quick access. The project was built with an emphasis on scalability, allowing for additional calculators or categories without disrupting the user experience. This approach helped ensure a clean and intuitive interface with minimal user friction.'
    },
    {
        id: 3,
        title: 'Recipe Roots',
        github: 'https://github.com/samanthacabrera/recipe-roots',
        link: 'https://www.youtube.com/embed/Qso3oxAXWDc',
        wip: false,
        deployed: false,
        contribution: "Sole Developer",
        description: 'A web application for sharing family recipes to a global audience.',
        overview: {
            tags: [],
            projectType: "Full-Stack Web App",
            techStack: ['React', 'Flask', 'SQLAlchemy', 'Tailwind CSS'],
            features: [
                'Discover family recipes from various cultures around the world.',
                'Explore recipes from a randomly featured country.',
                'Share your own family recipes with the community.',
                'Users can save their favorite recipes for quick access.',
                'Interactive UI for guiding users through recipe creation.'
            ]
        },
        insights: 'Connecting the front end to the back end was a challenging aspect of developing Recipe Roots. It took three weeks of intensive work to bridge these two components effectively, and this experience significantly enhanced my understanding of full-stack development. The challenges of integrating the user interface with the database taught me valuable lessons about state management and API consumption. As a result, I gained the skills essential for building a full-stack application that provides a seamless user experience, which I consider a significant achievement.',
        gallery: [
            '/reciperoots/home.png',
            '/reciperoots/featured.png',
            '/reciperoots/search.png',
            '/reciperoots/recipelist.png',
            '/reciperoots/recipepage.png',
            '/reciperoots/cta.png',
            '/reciperoots/mission.png'
        ]
    },
    {
        id: 4,
        title: 'YogiAPI',
        github: 'https://github.com/samanthacabrera/yogi_api',
        link: 'https://www.youtube.com/embed/Inhkh8RiL1k',
        wip: false,
        deployed: false,
        contribution: "Sole Developer",
        description: 'This API provides comprehensive access to a diverse collection of yoga poses.',
        overview: {
            tags: [],
            projectType: "Web App",
            techStack: ['React', 'Flask', 'SQLAlchemy', 'Tailwind CSS'],
            features: [
                'Use of standard HTTP methods: GET, POST, PUT, DELETE, and PATCH to handle CRUD operations.',
                'Clear and concise documentation that outlines how to use each endpoint, expected outputs, and error codes.',
                'User-friendly interface for browsing yoga poses.'
            ]
        },
        insights: 'Developing YogiAPI was my first experience creating an API, which came with its share of mistakes and learning opportunities. I encountered several challenges, such as correctly structuring endpoints and managing data flows. Each mistake provided valuable lessons that deepened my understanding of API design and best practices. Through trial and error, I learned how to handle errors more gracefully and ensure data integrity, ultimately resulting in a more robust and user-friendly API. This experience was pivotal in shaping my skills for future projects.',
        gallery: [
            '/yogiapi/home.png',
            '/yogiapi/intro.png',
            '/yogiapi/howto.png',
            '/yogiapi/endpoints.png'
        ]
    },
    {
        id: 5,
        title: "RunTheCity",
        github: 'https://github.com/samanthacabrera/learn2build',
        link: 'https://www.youtube.com/embed/z9GeI03I_Yo?si=Iu83t3Mc7AHGYb-_',
        wip: false,
        deployed: false,
        contribution: "Sole Developer",
        description: 'A fitness application to help users explore their city by providing personalized running routes.',
        overview: {
            tags: [],
            projectType: "Web App",
            techStack: ['React', 'Tailwind CSS', 'Mapbox', 'Vite'],
            features: [
                'Create and follow custom running routes.',
                'Discover featured routes in your city based on landmarks.',
                'Users can pause and resume their runs seamlessly.'
            ]
        },
        insights: 'Integrating Mapbox to provide real-time running routes presented technical challenges around event handling and dynamic map updates. The project required effective map state management to ensure smooth user interaction, especially on mobile devices. Additionally, optimizing the app for mobile users while keeping real-time data updates accurate was a significant consideration throughout development. This project gave me invaluable experience using geoLocation API that I plan to leverage in future projects.',
        gallery: [
            '/runthecity/hero.png',
            '/runthecity/map.png',
            '/runthecity/featured.png'
        ]
    },
    {
        id: 6,
        title: "Yarnsara",
        github: "https://github.com/samanthacabrera/ecommerce-store",
        link: "https://yarnsara-samanthacabreras-projects.vercel.app/",
        wip: true,
        deployed: true,
        contribution: "Sole Developer",
        description: "A full-stack eCommerce platform selling 100% upcycled and hand-crocheted yoga accessories.",
        overview: {
            tags: [],
            projectType: "Web App",
            techStack: ["React", "Express", "MongoDB", "Stripe"],
            features: [
                "Custom eCommerce storefront with seamless checkout.",
                "Integration with Stripe for secure payments.",
                "Product listings with detailed descriptions and images."
            ]
        },
        insights: "One of the biggest challenges so far has been setting up secure payment processing with Stripe while ensuring a smooth user experience. Managing product data in MongoDB and handling state efficiently in React has been another major learning curve. This project is giving me hands-on experience in creating a fully functional online store while aligning with sustainability values.",
    },
    {
        id: 7,
        title: "EatBySeason",
        github: "https://github.com/samanthacabrera/eat_in_season",
        link: "",
        wip: false,
        deployed: false,
        contribution: "Sole Developer",
        description: "EatBySeason is a web app that helps users discover in-season produce based on their location, encouraging healthier and more sustainable food choices.",
        overview: {
            tags: [],
            projectType: "Web App",
            techStack: ["React", "Python", "Supabase"],
            features: [
                "Discover in-season produce based on your location.",
                "Filter fruits and vegetables by type and season.",
                "Personalized seasonal produce recommendations."
            ]
        },
        insights: "One of the main challenges was integrating the backend with Supabase for real-time data and setting up location-based recommendations. Ensuring that the produce recommendations were accurate and relevant to the user’s location was key. The project also required careful attention to UI/UX to make the filtering system easy to use while still providing enough detail about the produce.",
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
        overview: {
            tags: [],
            projectType: "Web App",
            techStack: ["React", "Vite", "Tailwind CSS"],
            features: [
                "Mini game with Taylor Swift lyrics grouped into hidden categories.",
                "Hints system to guide players towards correct groupings.",
                "Mobile-friendly design for easy play on any device."
            ]
        },
        insights: "One of the biggest challenges in developing Swiftle has been designing an intuitive UI that makes grouping lyrics fun and engaging. Finding the right balance between challenge and accessibility has been a major focus. Additionally, structuring the backend logic to ensure lyrics are categorized correctly has required careful planning. This project is an exciting mix of game design, UI/UX development, and Taylor Swift appreciation!"
    }
];

export default projects;
