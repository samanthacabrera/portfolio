const projects = [
    {
        id: 1,
        title: "Tomate",
        github: "https://github.com/samanthacabrera/pomodoro",
        link: "https://samanthacabrera.github.io/pomodoro/",
        wip: true,
        deployed: true,
        year: "2025",
        tags: ["Productivity", "Web App", "UX/UI"],
        projectType: "Time Management Tool",
        techStack: ["React", "Vite", "Tailwind CSS"],
        features: [
             "Start, pause, and reset controls with clear timer display.",
             "Responsive design for use on desktop and mobile devices."
        ],
        insights: "Building the this tool helped me practice precise state management in React, particularly in handling timers and intervals. I also focused on creating a minimal and distraction-free UI to enhance user productivity.",
    },
    {
        id: 2,
        title: "Hand Motion Tracker",
        github: "https://github.com/samanthacabrera/mediapipe-hand-tracker",
        link: "",
        wip: false,
        deployed: false,
        year: "2025",
        tags: [ "Computer Vision", "Machine Learning", "Web App"],
        projectType: "Hand Tracking Visualization",
        techStack: [ "Mediapipe", "TensorFlow", "JavaScript"],
        features: [
            "Real-time hand gesture detection and visualization using Mediapipe.",
            "Integration with web camera feeds for seamless hand tracking directly in the browser.",
            "Multiple hand tracking capability to detect and track both hands simultaneously."
            
        ],
        insights: "This project taught me how to integrate third-party libraries into my web applications, optimize performance for real-time interaction, and work with 3D visualization tools.",
    },
    {
        id: 3,
        title: "Swiftle",
        github: "https://github.com/samanthacabrera/swiftle",
        link: "https://samanthacabrera.github.io/swiftle/",
        wip: false,
        deployed: true,
        year: "2025",
        tags: ["Game", "Web App", "UX/UI"],
        projectType: "Song Matching Game",
        techStack: ["React", "Vite", "Tailwind CSS"],
        features: [
            "Responsive and mobile-first design ensuring optimal play on any device.",
            "Real-time feedback to enhance user experience and maintain the flow of the game.",
        ],
        insights: "Swiftle challenged me to refine my front-end development skills, particularly in game logic and UI/UX design. I focused on creating dynamic state updates and smooth transitions to make the gameplay intuitive.",
    },
    {
        id: 4,
        title: "Typing Test",
        github: "https://github.com/samanthacabrera/typing-test",
        link: "https://samanthacabrera.github.io/typing-test/",
        wip: false,
        deployed: true,
        year: "2025",
        tags: ["Productivity", "Web App", "UX/UI"],
        projectType: "Typing Practice Tool",
        techStack: ["React", "Vite", "Tailwind CSS"],
        features: [
            "Real-time typing speed (WPM) and accuracy tracking.",
            "Randomized text passages to practice typing in different contexts.",
        ],
        insights: "This project was just for fun, but it taught me how to handle real-time metrics and update the UI dynamically as users type."
    },
    {
        id: 5,
        title: "Algorithm Visualizer",
        github: "https://github.com/samanthacabrera/array-sorting-visualizer",
        link: "https://samanthacabrera.github.io/array-sorting-visualizer/",
        wip: false,
        deployed: true,
        year: "2025",
        tags: ["Data Structures", "Animation", "Interactive Learning"],
        projectType: "Sorting Algorithm Visualizer",
        techStack: ["React", "Vite", "Tailwind CSS"],
        features: [
            "Interactive visualizations for five popular sorting algorithms.",
            "Step-by-step animation highlighting the comparisons made by the algorithm.",
            "Clear, concise explanations for each algorithm.",
            "Adjustable animation speed to observe algorithm behavior at different rates."

        ],
        insights: "Working on this project deepened my appreciation for how sorting algorithms operate and how to make abstract concepts tangible through visualization. It also helped me grow more confident in managing state in React and structuring interactive applications.",
    },
    {
        id: 6,
        title: "Recipe Roots",
        github: "https://github.com/samanthacabrera/recipe-roots",
        link: "",
        wip: false,
        deployed: false,
        year: "2024",
        tags: ["Full-Stack", "Web App", "CRUD"],
        projectType: "Recipe Sharing Platform",
        techStack: ["Flask", "SQLAlchemy", "Clerk"],
        features: [
            "Search functionality to explore recipes by ingredients, cuisine, or author",
            "Personalized features like saving favorite recipes and creating custom recipe collections."
        ],
        insights: "This project helped me improve my skills in connecting front-end and back-end technologies, especially in handling dynamic content like recipes and user-generated data. Additionally, integrating file uploads for recipe images taught me about cloud storage solutions and optimizing the backend for media handling.",
    },
]

export default projects;