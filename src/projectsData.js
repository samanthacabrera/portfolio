const projects = [
    {
        id: 1,
        title: "Recipe Roots",
        description: "Recipe Roots is an online platform designed for sharing family recipes, with the goal of preserving and sharing authentic, culturally accurate dishes with a global audience.",
        imageUrl: "/images/Screenshot 2024-07-16 at 12.02.38 PM.png",
        tags: ["React.js", "Community"],
        techStack: {
            frontEnd: ["React.js", "Tailwind CSS"],
            backEnd: ["Flask", "SQLAlchemy"],
            deployment: ["Cloudflare"]
        },
        currentlyWorkingOn: false,
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
                    },
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
    // Other projects...
];

export default projects;
