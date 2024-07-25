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
        currentlyWorkingOn: true,
        deployedLink: "https://reciperoots.com",
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
        tags: ["API", "Yoga"],
        techStack: {
            frontEnd: ["React.js"],
            backEnd: ["Flask", "SQLAlchemy"],
            deployment: ["Heroku"]
        },
        currentlyWorkingOn: false,
        deployedLink: "https://yogiapi.com",
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
                    },
                    {
                        title: "Database Integration",
                        description: "Set up the database with SQLAlchemy. Created migrations and seeded initial data for testing."
                    },
                    {
                        title: "Security & Authentication",
                        description: "Implemented secure user authentication. Added authorization mechanisms to protect sensitive data."
                    }
                ]
            },
            {
                title: "Testing & Quality Assurance",
                date: "",
                subsections: [
                    {
                        title: "Unit Testing",
                        description: "Wrote unit tests for the API endpoints to ensure they handle various input cases correctly."
                    },
                    {
                        title: "Bug Fixing & Refinement",
                        description: "Fixed bugs identified during testing. Refined the API performance and user experience."
                    }
                ]
            },
            {
                title: "Launch & Post-Launch",
                date: "",
                subsections: [
                    {
                        title: "Deployment",
                        description: "Deployed the API to Heroku and performed final testing to verify that it works in the production environment."
                    },
                    {
                        title: "Ongoing Support",
                        description: "Provided ongoing support and updates to the API. Monitored performance and user feedback for improvements."
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "EatBySeason",
        description: "EatBySeason is a web application that provides information on seasonal produce based on the user's location. It helps users discover what fruits and vegetables are in season and plan their meals accordingly.",
        imageUrl: "/images/eatbyseason.png",
        tags: ["Wellness", "API"],
        techStack: {
            frontEnd: ["React.js", "Tailwind CSS"],
            backEnd: ["Flask", "Supabase"],
            deployment: ["Vercel"]
        },
        currentlyWorkingOn: true,
        deployedLink: "https://eatbyseason.com",
        timeline: [
            {
                title: "Conceptualization & Planning",
                date: "",
                subsections: [
                    {
                        title: "Research",
                        description: "Researched seasonal produce and gathered data on various crops. Planned the application's features and user interface."
                    },
                    {
                        title: "Feature Set",
                        description: "Defined the core features including location-based produce recommendations and seasonal alerts."
                    }
                ]
            },
            {
                title: "Front-End Development",
                date: "",
                subsections: [
                    {
                        title: "UI Design",
                        description: "Designed the user interface using React.js and Tailwind CSS. Implemented responsive design for mobile and desktop views."
                    },
                    {
                        title: "Integration",
                        description: "Integrated the front-end with the back-end API to fetch and display seasonal produce data."
                    }
                ]
            },
            {
                title: "Back-End Development",
                date: "",
                subsections: [
                    {
                        title: "API Development",
                        description: "Developed RESTful API endpoints using Flask. Integrated with Supabase for database management."
                    },
                    {
                        title: "Location-Based Recommendations",
                        description: "Implemented location-based recommendations using IP geolocation and user permissions."
                    },
                    {
                        title: "Security & Authentication",
                        description: "Ensured secure access to user data and recommendations. Applied best practices for API security."
                    }
                ]
            },
            {
                title: "Testing & Quality Assurance",
                date: "",
                subsections: [
                    {
                        title: "User Testing",
                        description: "Conducted user testing to gather feedback on functionality and usability. Made adjustments based on user input."
                    },
                    {
                        title: "Bug Fixing & Refinement",
                        description: "Addressed issues found during testing. Enhanced the application based on feedback and testing results."
                    }
                ]
            },
            {
                title: "Launch & Post-Launch",
                date: "",
                subsections: [
                    {
                        title: "Official Launch",
                        description: "Launched the application publicly and monitored for any issues or bugs."
                    },
                    {
                        title: "Ongoing Improvements",
                        description: "Collected user feedback and made continuous improvements to the application's functionality and user experience."
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "GratitudeGlobe",
        description: "GratitudeGlobe is a web app that allows users to express gratitude and track their positive experiences. It provides a platform for daily reflections and helps users focus on the positives in their lives.",
        imageUrl: "/images/gratitudeglobe.png",
        tags: ["Community", "Wellness"],
        techStack: {
            frontEnd: ["React.js", "Tailwind CSS"],
            backEnd: ["Flask", "SQLAlchemy"],
            deployment: [""]
        },
        currentlyWorkingOn: false,
        deployedLink: "https://gratitudeglobe.com",
        timeline: [
            {
                title: "Conceptualization & Planning",
                date: "",
                subsections: [
                    {
                        title: "",
                        description: "Conducted research to understand user needs for a gratitude journaling app. Defined the target audience and their requirements."
                    }
                ]
            },
            {
                title: "Front-End Development",
                date: "",
                subsections: [
                    {
                        title: "Component Design",
                        description: "Designed reusable UI components using React.js. Implemented a responsive layout with Tailwind CSS."
                    },
                    {
                        title: "Integration",
                        description: "Connected the front-end with the back-end API to save and retrieve journal entries."
                    }
                ]
            },
            {
                title: "Back-End Development",
                date: "",
                subsections: [
                    {
                        title: "API Development",
                        description: "Developed RESTful API endpoints using Flask. Created endpoints for journal entry CRUD operations."
                    },
                    {
                        title: "Database Design",
                        description: "Designed the database schema with SQLAlchemy. Implemented database migrations and initial data seeding."
                    }
                ]
            },
            {
                title: "Launch",
                date: "Aug 2024",
                subsections: [
                    {
                        title: "Official Launch",
                        description: "Launched the application and monitored for any issues. Provided user support and addressed any feedback."
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Py_Flows",
        description: "Py_Flows is a CLI powered by Python that generates personalized yoga flows based on chakra and difficulty. It offers a unique way to tailor yoga practices to individual needs, enhancing the overall yoga experience.",
        imageUrl: "/images/pyflows.png",
        tags: ["CLI", "Yoga", "Generator"],
        techStack: {
            frontEnd: ["n/a"],
            backEnd: ["Python"],
            deployment: ["n/a"]
        },
        currentlyWorkingOn: false,
        deployedLink: "",
        timeline: [
            {
                title: "Conceptualization & Planning",
                date: "",
                subsections: [
                    {
                        title: "Market Research",
                        description: "Analyzed existing yoga tools and apps to identify gaps. Conducted surveys to understand user needs and preferences."
                    },
                    {
                        title: "Feature Definition",
                        description: "Outlined core features including personalized flow generation based on chakra and difficulty levels. Drafted project scope document."
                    }
                ]
            },
            {
                title: "Development",
                date: "",
                subsections: [
                    {
                        title: "CLI Design",
                        description: "Designed the CLI interface to be user-friendly and intuitive. Implemented basic commands and options for user interaction."
                    },
                    {
                        title: "Flow Generation Algorithm",
                        description: "Developed the algorithm to generate yoga flows based on input parameters such as chakra focus and difficulty level."
                    },
                    {
                        title: "Integration",
                        description: "Integrated the flow generation algorithm with the CLI interface. Ensured seamless interaction between different components."
                    }
                ]
            },
            {
                title: "Testing & Refinement",
                date: "",
                subsections: [
                    {
                        title: "Unit Testing",
                        description: "Wrote unit tests for the flow generation algorithm and CLI commands. Ensured all components work correctly under various scenarios."
                    },
                    {
                        title: "User Feedback",
                        description: "Conducted beta testing with a group of yoga practitioners. Collected feedback and made necessary adjustments to improve the user experience."
                    }
                ]
            },
            {
                title: "Launch & Post-Launch",
                date: "",
                subsections: [
                    {
                        title: "Official Release",
                        description: "Released the CLI tool on PyPI for public use. Promoted through yoga communities and social media."
                    },
                    {
                        title: "Ongoing Support & Improvements",
                        description: "Monitored user feedback and released updates to fix bugs and add new features. Continued to enhance the tool based on user needs."
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        title: "CatChi",
        description: "CatChi is a playful web app that combines the themes of cats and feng shui. It helps users find the best spots for their cats to rest and play based on feng shui principles.",
        imageUrl: "/images/catchi.png",
        tags: ["Cats", "Energy", "Lifestyle"],
        techStack: {
            frontEnd: ["React.js", "Tailwind CSS"],
            backEnd: ["Flask", "SQLAlchemy"],
            deployment: ["n/a"]
        },
        currentlyWorkingOn: true,
        deployedLink: "https://catchi.com",
        timeline: [
            {
                title: "Conceptualization & Planning",
                date: "",
                subsections: [
                    {
                        title: "Research",
                        description: "Explored the principles of feng shui and how they can be applied to cat behavior. Defined the application's features and user experience."
                    },
                    {
                        title: "Feature Definition",
                        description: "Outlined core features such as location recommendations, feng shui tips, and interactive elements for cats."
                    }
                ]
            },
            {
                title: "Front-End Development",
                date: "",
                subsections: [
                    {
                        title: "UI Design",
                        description: "Designed an engaging user interface using React.js and Tailwind CSS. Implemented playful animations and interactions."
                    },
                    {
                        title: "Integration",
                        description: "Integrated the front-end with the back-end API to provide dynamic recommendations and feng shui tips."
                    }
                ]
            },
            {
                title: "Back-End Development",
                date: "",
                subsections: [
                    {
                        title: "API Development",
                        description: "Developed the API using Flask. Created endpoints for fetching feng shui recommendations and user data."
                    },
                    {
                        title: "Database Design",
                        description: "Designed the database schema with SQLAlchemy. Implemented data storage for user preferences and recommendations."
                    },
                    {
                        title: "Security & Authentication",
                        description: "Implemented secure user authentication and data protection. Applied best practices for API security."
                    }
                ]
            },
            {
                title: "Testing & Quality Assurance",
                date: "",
                subsections: [
                    {
                        title: "User Testing",
                        description: "Conducted user testing to gather feedback on the app's functionality and enjoyment. Made adjustments based on user input."
                    },
                    {
                        title: "Bug Fixing & Refinement",
                        description: "Identified and fixed bugs. Enhanced features and improved performance based on testing results."
                    }
                ]
            },
            {
                title: "Launch & Post-Launch",
                date: "",
                subsections: [
                    {
                        title: "Official Launch",
                        description: "Launched the application and monitored for any issues. Provided user support and addressed any feedback."
                    },
                    {
                        title: "Ongoing Updates",
                        description: "Released updates and new features based on user feedback. Continued to improve the app's functionality and user experience."
                    }
                ]
            }
        ]
    }
];

export default projects;

