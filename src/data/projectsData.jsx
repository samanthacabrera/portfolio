const projects = [
    {
        id: 1,
        title: 'Recipe Roots',
        link:'https://github.com/samanthacabrera/recipe-roots',
        thumbnail: "/reciperoots/home.png",
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
        walkthrough: 'https://www.youtube.com/embed/Qso3oxAXWDc',
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
            '/reciperoots/home.png',
            '/reciperoots/featured.png',
            '/reciperoots/search.png',
            '/reciperoots/recipelist.png',
            '/reciperoots/recipepage.png',
            '/reciperoots/cta.png',
            '/reciperoots/mission.png',
        ]
    },
    {
        id: 2,
        title: 'YogiAPI',
        link: 'https://github.com/samanthacabrera/yogi_api',
        thumbnail: '/yogiapi/home.png',
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
        walkthrough: 'https://www.youtube.com/embed/Inhkh8RiL1k',
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
            '/yogiapi/home.png',
            '/yogiapi/intro.png',
            '/yogiapi/howto.png',
            '/yogiapi/endpoints.png'
        ]
    }
];

export default projects;
