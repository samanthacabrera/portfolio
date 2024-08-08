const projects = [
    {
        id: 1,
        title: "Recipe Roots",
        description: "Recipe Roots is an online platform designed for sharing family recipes, with the goal of preserving and sharing authentic, culturally accurate dishes with a global audience.",
        imageUrl: "/images/reciperoots.png",
        tags: ["Ancestry", "Community", "Family"],
        techStack: {
            frontEnd: ["React.js", "Tailwind CSS"],
            backEnd: ["Flask", "SQLAlchemy"],
            deployment: ["Cloudflare"]
        },
        currentlyWorkingOn: false,
        deployed: false,
        link: "",
        timeline: [
            {
                title: "Conceptualization & Planning",
                date: "February 2024",
                subsections: [
                    {
                        title: "Market Research",
                        description: "Analyzed existing recipe-sharing platforms to identify gaps and opportunities. Created user personas and defined project goals."
                    },
                    {
                        title: "Feature Definition",
                        description: "Outlined core features and functionality, including recipe submission, user profiles, and search capabilities. Drafted project scope document."
                    }
                ]
            },
            {
                title: "Front-End Development",
                date: "May 2024",
                subsections: [
                    {
                        title: "Component Design",
                        description: "Developed reusable UI components using React.js. Implemented state management and responsive design with Tailwind CSS."
                    }
                ]
            },
            {
                title: "Back-End Development",
                date: "May 2024",
                subsections: [
                    {
                        title: "API Development",
                        description: "Developed RESTful API using Flask. Created endpoints for user management, recipe CRUD operations, and search functionality."
                    },
                    {
                        title: "Database Design & Implementation",
                        description: "Designed database schema with SQLAlchemy. Implemented database migrations and optimized queries for performance."
                    },
                    {
                        title: "Security & Authentication",
                        description: "Implemented user authentication and authorization. Applied security best practices to protect user data and prevent vulnerabilities."
                    }
                ]
            },
            {
                title: "Testing & Quality Assurance",
                date: "June - July 2024",
                subsections: [
                    {
                        title: "Beta Testing",
                        description: "Released a beta version to a small group of users, mostly consisting of peers from my program at FlatIron School. Collected feedback on functionality, usability, and performance."
                    },
                    {
                        title: "Bug Fixing & Refinement",
                        description: "Addressed bugs reported during beta testing. Refined features and improved user experience based on feedback."
                    }
                ]
            },
            {
                title: "Launch & Post-Launch",
                date: "Aug 2024",
                subsections: [
                    {
                        title: "Official Launch",
                        description: "Coming soon......"
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "YogiAPI",
        description: "YogiAPI is a yoga practice API providing structured data on yoga poses, sequences, and practices. It supports both beginner and advanced yoga practices and can be integrated into various fitness applications.",
        imageUrl: "/images/yogiapi.png",
        tags: ["Fitness", "Yoga"],
        techStack: {
            frontEnd: ["React.js"],
            backEnd: ["Flask", "SQLAlchemy"],
            deployment: ["Heroku"]
        },
        currentlyWorkingOn: true,
        deployed: false,
        link: "",
        timeline: [
            {
                title: "Conceptualization & Planning",
                date: "",
                subsections: [
                    {
                        title: "API Design",
                        description: "Defined the API endpoints and data structure. Designed the schema for poses, sequences, and practices."
                    },
                    {
                        title: "User Stories",
                        description: "Created user stories for different types of users including beginners, advanced practitioners, and app developers."
                    }
                ]
            },
            {
                title: "Front-End Development",
                date: "",
                subsections: [
                    {
                        title: "Component Design",
                        description: "Designed reusable UI components using React.js. Implemented state management for the yoga sequences."
                    }
                ]
            },
            {
                title: "Back-End Development",
                date: "",
                subsections: [
                    {
                        title: "API Development",
                        description: "Developed the API using Flask. Implemented endpoints for fetching yoga poses, sequences, and practices."
                    }
                ]
            },
            {
                title: "Launch & Post-Launch",
                date: "Aug 2024",
                subsections: [
                    {
                        title: "Official Launch",
                        description: "Coming soon......"
                    }
                ]
            }
        ]
    },
    // {
    //     id: 3,
    //     title: "EatBySeason",
    //     description: "EatBySeason is a web application that provides information on seasonal produce based on the user's location. It helps users discover what fruits and vegetables are in season and plan their meals accordingly.",
    //     imageUrl: "/images/eatbyseason.png",
    //     tags: ["Wellness", "Lifestyle"],
    //     techStack: {
    //         frontEnd: ["React.js", "Tailwind CSS"],
    //         backEnd: ["Flask", "Supabase"],
    //         deployment: ["Vercel"]
    //     },
    //     currentlyWorkingOn: false,
    //     deployed: false,
    //     link: "",
    //     timeline: [
    //         {
    //             title: "Conceptualization & Planning",
    //             date: "",
    //             subsections: [
    //                 {
    //                     title: "Research",
    //                     description: "Researched seasonal produce and gathered data on various crops. Planned the application's features and user interface."
    //                 },
    //                 {
    //                     title: "Feature Set",
    //                     description: "Defined the core features including location-based produce recommendations and seasonal alerts."
    //                 }
    //             ]
    //         },
    //         {
    //             title: "Front-End Development",
    //             date: "",
    //             subsections: [
    //                 {
    //                     title: "UI Design",
    //                     description: "Designed the user interface using React.js and Tailwind CSS. Implemented responsive design for mobile and desktop views."
    //                 },
    //                 {
    //                     title: "Integration",
    //                     description: "Integrated the front-end with the back-end API to fetch and display seasonal produce data."
    //                 }
    //             ]
    //         },
    //         {
    //             title: "Back-End Development",
    //             date: "",
    //             subsections: [
    //                 {
    //                     title: "API Development",
    //                     description: "Developed RESTful API endpoints using Flask. Integrated with Supabase for database management."
    //                 },
    //                 {
    //                     title: "Location-Based Recommendations",
    //                     description: "Implemented location-based recommendations using IP geolocation and user permissions."
    //                 },
    //                 {
    //                     title: "Security & Authentication",
    //                     description: "Ensured secure access to user data and recommendations. Applied best practices for API security."
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     id: 4,
    //     title: "GratitudeGlobe",
    //     description: "GratitudeGlobe is a web app that allows users to express gratitude and track their positive experiences. It provides a platform for daily reflections and helps users focus on the positives in their lives.",
    //     imageUrl: "/images/gratitudeglobe.png",
    //     tags: ["Community", "Wellness"],
    //     techStack: {
    //         frontEnd: ["React.js", "Tailwind CSS"],
    //         backEnd: ["Flask", "SQLAlchemy"],
    //         deployment: [""]
    //     },
    //     currentlyWorkingOn: false,
    //     deployed: false,
    //     link: "",
    //     timeline: [
    //         {
    //             title: "Conceptualization & Planning",
    //             date: "",
    //             subsections: [
    //                 {
    //                     title: "",
    //                     description: "Conducted research to understand user needs for a gratitude journaling app. Defined the target audience and their requirements."
    //                 }
    //             ]
    //         },
    //         {
    //             title: "Front-End Development",
    //             date: "",
    //             subsections: [
    //                 {
    //                     title: "Component Design",
    //                     description: "Designed reusable UI components using React.js. Implemented a responsive layout with Tailwind CSS."
    //                 },
    //                 {
    //                     title: "Integration",
    //                     description: "Connected the front-end with the back-end API to save and retrieve journal entries."
    //                 }
    //             ]
    //         },
    //         {
    //             title: "Back-End Development",
    //             date: "",
    //             subsections: [
    //                 {
    //                     title: "API Development",
    //                     description: "Developed RESTful API endpoints using Flask. Created endpoints for journal entry CRUD operations."
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     id: 5,
    //     title: "Py_Flows",
    //     description: "Py_Flows is a CLI powered by Python that generates personalized yoga flows based on chakra and difficulty. It offers a unique way to tailor yoga practices to individual needs, enhancing the overall yoga experience.",
    //     imageUrl: "/images/pyflows.png",
    //     tags: ["CLI", "Yoga", "Generator"],
    //     techStack: {
    //         frontEnd: ["n/a"],
    //         backEnd: ["Python"],
    //         deployment: ["n/a"]
    //     },
    //     currentlyWorkingOn: false,
    //     deployed: false,
    //     link: "",
    //     timeline: [
    //         {
    //             title: "Conceptualization & Planning",
    //             date: "",
    //             subsections: [
    //                 {
    //                     title: "Market Research",
    //                     description: "Analyzed existing yoga tools and apps to identify gaps. Conducted surveys to understand user needs and preferences."
    //                 },
    //                 {
    //                     title: "Feature Definition",
    //                     description: "Outlined core features including personalized flow generation based on chakra and difficulty levels. Drafted project scope document."
    //                 }
    //             ]
    //         },
    //         {
    //             title: "Development",
    //             date: "",
    //             subsections: [
    //                 {
    //                     title: "CLI Design",
    //                     description: "Designed the CLI interface to be user-friendly and intuitive. Implemented basic commands and options for user interaction."
    //                 },
    //                 {
    //                     title: "Flow Generation Algorithm",
    //                     description: "Developed the algorithm to generate yoga flows based on input parameters such as chakra focus and difficulty level."
    //                 },
    //                 {
    //                     title: "Integration",
    //                     description: "Integrated the flow generation algorithm with the CLI interface. Ensured seamless interaction between different components."
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     id: 6,
    //     title: "CatChi",
    //     description: "CatChi is a playful web app that combines the themes of cats and feng shui. It helps users find the best spots for their cats to rest and play based on feng shui principles.",
    //     imageUrl: "/images/catchi.png",
    //     tags: ["Cats", "Energy", "Lifestyle"],
    //     techStack: {
    //         frontEnd: ["React.js", "Tailwind CSS"],
    //         backEnd: ["Flask", "SQLAlchemy"],
    //         deployment: ["n/a"]
    //     },
    //     currentlyWorkingOn: true,
    //     deployed: false,
    //     link: "",
    //     timeline: [
    //         {
    //             title: "Conceptualization & Planning",
    //             date: "Aug 2024",
    //             subsections: [
    //                 {
    //                     title: "Research",
    //                     description: "Explored the principles of feng shui and how they can be applied to cat behavior. Defined the application's features and user experience."
    //                 },
    //                 {
    //                     title: "Feature Definition",
    //                     description: "Outlined core features such as location recommendations, feng shui tips, and interactive elements for cats."
    //                 }
    //             ]
    //         }
    //     ]
    // }
];

export default projects;

