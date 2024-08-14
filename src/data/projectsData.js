const projects = [
    {
        id: 1,
        title: 'Recipe Roots',
        imageUrl: "/reciperoots/reciperoots.png",
        description: 'A web application for organizing and sharing family recipes. Users can upload recipes, add photos, and answer questions about the recipe and its creator.',
        wip: false,
        deployed: false,
        link: '',
        overview: {
            tags: ['React', 'Flask', 'SQLAlchemy', 'Recipes'],
            techStack: ['React', 'Flask', 'SQLAlchemy', 'Tailwind CSS'],
            features: [
                'Upload and share family recipes.',
                'Add photos and detailed descriptions.',
                'Interactive UI for guiding users through recipe creation.'
            ]
        },
        insights: 'A significant challenge in developing Recipe Roots was implementing an efficient search and filter functionality that accommodated diverse recipe attributes. Users often had recipes with varying levels of detail, so designing a flexible search mechanism that could handle different ingredient lists, cooking times, and preparation methods was essential. I addressed this by creating a robust indexing system and incorporating faceted search capabilities, which significantly improved the app’s performance and user satisfaction. Additionally, managing recipe images and ensuring they loaded quickly and accurately across different devices required optimizing image storage and retrieval processes.',
        timeline: [
            {
                title: 'Design & Planning',
                date: '2023-01-10',
                subsections: [
                    { title: 'UI/UX Design', description: 'Designed the user interface and user experience for recipe management.' },
                    { title: 'Database Schema', description: 'Created schema for storing recipes and user information.' }
                ]
            },
            {
                title: 'Development',
                date: '2023-02-01',
                subsections: [
                    { title: 'Front End', description: 'Developed React components and integrated Tailwind CSS for styling.' },
                    { title: 'Back End', description: 'Built Flask APIs and set up SQLAlchemy for data management.' }
                ]
            }
        ],
        gallery: [
            '/reciperoots/reciperoots.png'
        ]
    },
    {
        id: 2,
        title: 'YogiAPI',
        imageUrl: "/yogiapi/yogiapi.png",
        description: 'A React and Flask-based API for generating personalized yoga flows based on user preferences and chakra balancing.',
        wip: true,
        deployed: false,
        link: '',
        overview: {
            tags: ['React', 'Flask', 'Yoga', 'API'],
            techStack: ['React', 'Flask', 'SQLAlchemy', 'Tailwind CSS'],
            features: [
                'Generates personalized yoga flows based on user preferences.',
                'Includes chakra balancing and difficulty level options.',
                'User-friendly interface for selecting yoga routines.'
            ]
        },
        insights: 'Building YogiAPI was my first experience creating an API from scratch, which presented several learning opportunities and challenges. One of the initial hurdles was designing the API architecture and ensuring it met best practices for RESTful services. Navigating the intricacies of endpoint design, request handling, and response formatting was a steep learning curve. Additionally, integrating with different yoga pose libraries and maintaining data consistency across these sources required careful attention. To overcome these challenges, I spent significant time studying API design principles and experimenting with various tools and libraries. This process not only helped me develop YogiAPI but also provided a solid foundation for future API projects.',
        timeline: [
            {
                title: 'Project Planning',
                date: '2023-01-15',
                subsections: [
                    { title: 'Research', description: 'Conducted research on yoga flow generation and user preferences.' },
                    { title: 'Design', description: 'Designed the architecture for integrating Flask with React.' }
                ]
            },
            {
                title: 'Development',
                date: '2023-02-01',
                subsections: [
                    { title: 'Front End', description: 'Developed the React components for user interaction.' },
                    { title: 'Back End', description: 'Built Flask API endpoints and integrated with SQLAlchemy.' }
                ]
            }
        ],
        gallery: [
            '/yogiapi/yogiapi.png'
        ]
    },
    {
        id: 3,
        title: 'EatBySeason',
        imageUrl: "/eatbyseason.png",
        description: 'A web app to track seasonal produce based on user location, providing detailed information about crops and their seasonal availability.',
        wip: false,
        deployed: true,
        link: 'https://example.com/eatbyseason',
        overview: {
            tags: ['React', 'Vite', 'Flask', 'Supabase', 'Seasonal Produce'],
            techStack: ['Vite', 'React', 'Tailwind CSS', 'Flask', 'Supabase'],
            features: [
                'Displays seasonal produce based on user location.',
                'Provides detailed information on crops and seasons.',
                'Uses IP-based location detection for user convenience.'
            ]
        },
        insights: 'One of the primary challenges in EatBySeason was ensuring the accuracy and relevance of seasonal produce data across different regions. Seasonal variations can be quite pronounced, and sourcing accurate information for each geographic area required integrating multiple data sources and regularly updating the database. I implemented a system that cross-referenced produce data from agricultural databases and local reports, along with a fallback mechanism for less common regions. This approach helped maintain up-to-date and reliable information for users. Performance optimization was also a key focus, and I used techniques like asynchronous data fetching and regional caching to enhance the app’s responsiveness.',
        timeline: [
            {
                title: 'Initial Setup',
                date: '2023-03-01',
                subsections: [
                    { title: 'Environment Setup', description: 'Configured Vite and Flask for development.' },
                    { title: 'Database Design', description: 'Designed the Supabase schema for crop data.' }
                ]
            },
            {
                title: 'User Interface',
                date: '2023-04-01',
                subsections: [
                    { title: 'Frontend Development', description: 'Developed React components and integrated Tailwind CSS.' },
                    { title: 'Location Services', description: 'Implemented IP-based location detection.' }
                ]
            }
        ],
        gallery: [
            '/eatbyseason.png'
        ]
    },
    {
        id: 4,
        title: 'CatChi',
        imageUrl: "/catchi.png",
        description: 'A web app for finding and organizing cat playdates based on compatibility, including scheduling and communication features for cat owners.',
        wip: true,
        deployed: false,
        link: '',
        overview: {
            tags: ['React', 'Flask', 'Cats', 'Playdates'],
            techStack: ['React', 'Flask', 'SQLAlchemy', 'Tailwind CSS'],
            features: [
                'Matches cats for playdates based on compatibility.',
                'Provides scheduling and communication tools for cat owners.',
                'Includes a user-friendly interface for managing playdates.'
            ]
        },
        insights: 'The idea for Cat Chi emerged from a fascination with Feng Shui and a desire to create a unique, interactive experience. I envisioned a game where players help a cat find the best placement for objects in different rooms to achieve harmony based on Feng Shui principles. The goal was to combine education with entertainment by using Pygame to build a drag-and-drop game. This initial phase involved researching Feng Shui concepts, sketching out game levels, and designing the core mechanics to ensure the game would be both fun and informative.',
        timeline: [
            {
                title: 'Research & Planning',
                date: '2023-07-01',
                subsections: [
                    { title: 'Compatibility Algorithm', description: 'Developed the algorithm for matching cats based on compatibility.' },
                    { title: 'Feature Planning', description: 'Outlined features and user requirements for the app.' }
                ]
            },
            {
                title: 'Development',
                date: '2023-08-01',
                subsections: [
                    { title: 'Front End', description: 'Built React components and integrated Tailwind CSS for styling.' },
                    { title: 'Back End', description: 'Developed Flask APIs and set up SQLAlchemy for database management.' }
                ]
            }
        ],
        gallery: [
            '/catchi.png'
        ]
    }
];

export default projects;
