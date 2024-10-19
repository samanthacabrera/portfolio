const projects = [
    {
        id: 1,
        title: 'Calcalooza',
        github: 'https://github.com/samanthacabrera/conversion-calculator',
        link: 'https://calcalooza.com', 
        wip: true,
        deployed: true,
        description: 'A responsive website featuring a variety of math calculators, including unit conversion, area, volume, and more.',
        overview: {
            techStack: ['React', 'Vite', 'Tailwind CSS'],
            features: [
                'Provides calculators for different mathematical operations.',
                'User-friendly interface for easy navigation.',
                'Responsive design for accessibility across devices.',
                'Categories for various calculator types including unit conversion, area, and volume.'
            ]
        },
        insights: 'The main challenge in developing Calcalooza is ensuring that all calculators provide accurate results while maintaining a clean and intuitive UI. I focused on creating a seamless user experience by organizing the calculators into categories and optimizing for quick access.',
        gallery: [
            '/calcalooza/home.png',
            '/calcalooza/page.png',
        ]
    },
    {
        id: 2,
        title: 'Recipe Roots',
        github: 'https://github.com/samanthacabrera/recipe-roots',
        link: 'https://www.youtube.com/embed/Qso3oxAXWDc',
        wip: false,
        deployed: false,
        description: 'A web application for sharing family recipes to a global audience.',
        overview: {
            techStack: ['React', 'Flask', 'SQLAlchemy', 'Tailwind CSS'],
            features: [
                'Discover family recipes from various cultures around the world.',
                'Explore recipes from a randomly featured country.',
                'Share your own family recipes with the community.',
                'Users can save their favorite recipes for quick access.',
                'Interactive UI for guiding users through recipe creation.'
            ]
        },
        insights: 'A significant challenge in developing Recipe Roots was implementing an efficient search and filter functionality that accommodated diverse recipe attributes. Users often had recipes with varying levels of detail, so designing a flexible search mechanism that could handle different ingredient lists, cooking times, and preparation methods was essential. I addressed this by creating a robust indexing system and incorporating faceted search capabilities, which significantly improved the app’s performance and user satisfaction. Additionally, managing recipe images and ensuring they loaded quickly and accurately across different devices required optimizing image storage and retrieval processes.',
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
        id: 3,
        title: 'YogiAPI',
        github: 'https://github.com/samanthacabrera/yogi_api',
        link: 'https://www.youtube.com/embed/Inhkh8RiL1k',
        wip: false,
        deployed: false,
        description: 'This API provides comprehensive access to a diverse collection of yoga poses, allowing you to integrate yoga pose data into your applications effortlessly.',
        overview: {
            techStack: ['React', 'Flask', 'SQLAlchemy', 'Tailwind CSS'],
            features: [
                'Use of standard HTTP methods: GET, POST, PUT, DELETE, and PATCH to handle CRUD operations.',
                'Clear and concise documentation that outlines how to use each endpoint, expected outputs, and error codes.',
                'User-friendly interface for browsing yoga poses.'
            ]
        },
        insights: 'Building YogiAPI was my first experience creating an API from scratch, which presented several learning opportunities and challenges. One of the initial hurdles was designing the API architecture and ensuring it met best practices for RESTful services. Navigating the intricacies of endpoint design, request handling, and response formatting was a steep learning curve. Additionally, integrating with different yoga pose libraries and maintaining data consistency across these sources required careful attention. To overcome these challenges, I spent significant time studying API design principles and experimenting with various tools and libraries. This process not only helped me develop YogiAPI but also provided a solid foundation for future API projects.',
        gallery: [
            '/yogiapi/home.png',
            '/yogiapi/intro.png',
            '/yogiapi/howto.png',
            '/yogiapi/endpoints.png'
        ]
    },
    {
        id: 4,
        title: "RunTheCity",
        github: 'https://github.com/samanthacabrera/learn2build',
        link: 'https://www.youtube.com/embed/z9GeI03I_Yo?si=Iu83t3Mc7AHGYb-_',
        wip: false,
        deployed: false,
        description: 'A fitness application to help users explore their city by providing personalized running routes.',
        overview: {
            techStack: ['React', 'Tailwind CSS', 'Mapbox', 'Vite'],
            features: [
                'Create and follow custom running routes.',
                'Discover featured routes in your city based on landmarks.',
                'Users can pause and resume their runs seamlessly.'
            ]
        },
        insights: 'One of the challenges was integrating Mapbox to display real-time routes and distances. Ensuring the app dynamically updated based on location and selected landmarks required careful event handling and map state management. This also required optimization for mobile users who wanted to track routes on the go.',
        gallery: [
            '/runthecity/hero.png',
            '/runthecity/map.png',
            '/runthecity/featured.png'
        ]
    },
];

export default projects;
