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
        insights: 'The primary challenge was ensuring each calculator delivered accurate results across all operations. Structuring the UI to accommodate a wide range of tools while keeping navigation simple and efficient was a focus. I aimed on creating a seamless user experience by organizing the calculators into categories and optimizing for quick access. The project was built with an emphasis on scalability, allowing for additional calculators or categories without disrupting the user experience. This approach helped ensure a clean and intuitive interface with minimal user friction.',
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
        id: 3,
        title: 'YogiAPI',
        github: 'https://github.com/samanthacabrera/yogi_api',
        link: 'https://www.youtube.com/embed/Inhkh8RiL1k',
        wip: false,
        deployed: false,
        description: 'This API provides comprehensive access to a diverse collection of yoga poses.',
        overview: {
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
        insights: 'Integrating Mapbox to provide real-time running routes presented technical challenges around event handling and dynamic map updates. The project required effective map state management to ensure smooth user interaction, especially on mobile devices. Additionally, optimizing the app for mobile users while keeping real-time data updates accurate was a significant consideration throughout development. This project gave me invaluable experience using geoLocation API that I plan to leverage in future projects.',
        gallery: [
            '/runthecity/hero.png',
            '/runthecity/map.png',
            '/runthecity/featured.png'
        ]
    },
];

export default projects;
