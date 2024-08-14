const projects = [
    {
        id: 1,
        title: 'Recipe Roots',
        link:'https://github.com/samanthacabrera/recipe-roots',
        imageUrl: "/reciperoots/reciperoots.png",
        description: 'A web application for sharing family recipes to a global audience. By sharing these recipes, we honor our ancestors and keep their spirits alive in our kitchens.',
        wip: false,
        overview: {
            tags: ['Family', 'Culture', 'Community'],
            techStack: ['React', 'Flask', 'SQLAlchemy', 'Tailwind CSS'],
            features: [
                'Discover family recipes from various cultures around the world.',
                'Explore recipes from a randomly featured country.',
                'Share your own family recipes with the community',
                'Users can save their favorite recipes for quick access.',
                'Interactive UI for guiding users through recipe creation.'
            ]
        },
        insights: 'A significant challenge in developing Recipe Roots was implementing an efficient search and filter functionality that accommodated diverse recipe attributes. Users often had recipes with varying levels of detail, so designing a flexible search mechanism that could handle different ingredient lists, cooking times, and preparation methods was essential. I addressed this by creating a robust indexing system and incorporating faceted search capabilities, which significantly improved the app’s performance and user satisfaction. Additionally, managing recipe images and ensuring they loaded quickly and accurately across different devices required optimizing image storage and retrieval processes.',
        timeline: [
            {
                title: 'Design',
                date: 'April 2024',
                subsections: [
                    { title: 'UI/UX Design', description: 'Designed the user interface and user experience for recipe management.' },
                    { title: 'Database Schema', description: 'Created schema for storing recipes and user information.' }
                ]
            },
            {
                title: 'Development',
                date: 'May 2024',
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
        link: 'https://github.com/samanthacabrera/yogi_api',
        imageUrl: "/yogiapi/yogiapi.png",
        description: 'This API provides comprehensive access to a diverse collection of yoga poses, allowing you to integrate yoga pose data into your applications effortlessly.',
        wip: true,
        overview: {
            tags: ['Yoga', 'Wellness', 'Lifestyle'],
            techStack: ['React', 'Flask', 'SQLAlchemy', 'Tailwind CSS'],
            features: [
                'Use of standard HTTP methods: GET, POST, PUT, DELETE, and PATCH to handle CRUD operations.',
                'Clear and concise documentation that outlines how to use each endpoint, expected outputs, and error codes.',
                'User-friendly interface for browsing yoga poses.'
            ]
        },
        insights: 'Building YogiAPI was my first experience creating an API from scratch, which presented several learning opportunities and challenges. One of the initial hurdles was designing the API architecture and ensuring it met best practices for RESTful services. Navigating the intricacies of endpoint design, request handling, and response formatting was a steep learning curve. Additionally, integrating with different yoga pose libraries and maintaining data consistency across these sources required careful attention. To overcome these challenges, I spent significant time studying API design principles and experimenting with various tools and libraries. This process not only helped me develop YogiAPI but also provided a solid foundation for future API projects.',
        timeline: [
            {
                title: 'Design',
                date: 'May 2024',
                subsections: [
                    { title: 'Research', description: 'Conducted research on yoga flow generation and user preferences.' },
                    { title: 'Design', description: 'Designed the architecture for integrating Flask with React.' }
                ]
            },
            {
                title: 'Development',
                date: 'June 2024',
                subsections: [
                    { title: 'Front End', description: 'Developed the React components for user interaction.' },
                    { title: 'Back End', description: 'Built Flask API endpoints and integrated with SQLAlchemy.' }
                ]
            }
        ],
        gallery: [
            '/yogiapi/yogiapi.png'
        ]
    }
    // {
    //     id: 3,
    //     title: 'EatBySeason',
    //     link: 'https://github.com/samanthacabrera/eat_in_season',
    //     imageUrl: "/eatbyseason.png",
    //     description: 'A web app to track seasonal produce based on user location, providing detailed information about crops and their seasonal availability.',
    //     wip: false,
    //     overview: {
    //         tags: ['Sustainability', 'Wellness'],
    //         techStack: ['React', 'Vite', 'Flask', 'Supabase', ],
    //         features: [
    //             'Displays seasonal produce based on user location.',
    //             'Uses IP-based location detection for user convenience.'
    //         ]
    //     },
    //     insights: 'One of the primary challenges in EatBySeason was ensuring the accuracy and relevance of seasonal produce data across different regions. Seasonal variations can be quite pronounced, and sourcing accurate information for each geographic area required integrating multiple data sources and regularly updating the database. I implemented a system that cross-referenced produce data from agricultural databases and local reports, along with a fallback mechanism for less common regions. This approach helped maintain up-to-date and reliable information for users. Performance optimization was also a key focus, and I used techniques like asynchronous data fetching and regional caching to enhance the app’s responsiveness.',
    //     timeline: [
    //         {
    //             title: 'Initial Setup',
    //             date: '2023-03-01',
    //             subsections: [
    //                 { title: 'Environment Setup', description: 'Configured Vite and Flask for development.' },
    //                 { title: 'Database Design', description: 'Designed the Supabase schema for crop data.' }
    //             ]
    //         },
    //         {
    //             title: 'User Interface',
    //             date: '2023-04-01',
    //             subsections: [
    //                 { title: 'Frontend Development', description: 'Developed React components and integrated Tailwind CSS.' },
    //                 { title: 'Location Services', description: 'Implemented IP-based location detection.' }
    //             ]
    //         }
    //     ],
    //     gallery: [
    //         '/eatbyseason.png'
    //     ]
    // },
    // {
    //     id: 4,
    //     title: 'CatChi',
    //     link: 'https://github.com/samanthacabrera/cat_chi',
    //     imageUrl: "/catchi.png",
    //     description: 'A web app for finding and organizing cat playdates based on compatibility, including scheduling and communication features for cat owners.',
    //     wip: true,
    //     overview: {
    //         tags: ['React', 'Flask', 'Cats', 'Playdates'],
    //         techStack: ['React', 'Flask', 'SQLAlchemy', 'Tailwind CSS'],
    //         features: [
    //             'Users drag and drop the specified object to the best location on the grid based on Feng Shui principles.',
    //             'Users can complete three unique levels (bedroom, office, and living room).'
    //         ]
    //     },
    //     insights: 'The idea for Cat Chi emerged from a fascination with Feng Shui and a desire to create a unique, interactive experience. I envisioned a game where players help a cat find the best placement for objects in different rooms to achieve harmony based on Feng Shui principles. The goal was to combine education with entertainment by using Pygame to build a drag-and-drop game. This initial phase involved researching Feng Shui concepts, sketching out game levels, and designing the core mechanics to ensure the game would be both fun and informative.',
    //     timeline: [
    //         {
    //             title: 'Research & Planning',
    //             date: '2023-07-01',
    //             subsections: [
    //                 { title: 'Compatibility Algorithm', description: 'Developed the algorithm for matching cats based on compatibility.' },
    //                 { title: 'Feature Planning', description: 'Outlined features and user requirements for the app.' }
    //             ]
    //         },
    //         {
    //             title: 'Development',
    //             date: '2023-08-01',
    //             subsections: [
    //                 { title: 'Front End', description: 'Built React components and integrated Tailwind CSS for styling.' },
    //                 { title: 'Back End', description: 'Developed Flask APIs and set up SQLAlchemy for database management.' }
    //             ]
    //         }
    //     ],
    //     gallery: [
    //         '/catchi.png'
    //     ]
    // }
];

export default projects;
