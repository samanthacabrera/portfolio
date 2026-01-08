const projects = [
        {
        id: 1,
        title: "Photofolio",
        github: "https://github.com/samanthacabrera/photofolio",
        link: "https://samanthacabrera.github.io/photofolio/",
        wip: true,
        deployed: true,
        year: "2026",
        desc: "Photography Portfolio",
        techStack: ["Framer Motion", "React Router DOM"],
        features: [
            "Lightbox modal for viewing images in full size.",
            "Smooth transitions and hover effects for a modern look."

        ],
        insights: "I built this project to showcase my husband's photography in a way that feels clean and minimal. I focused on responsive layouts and smooth transitions to ensure the photos load beautifully across devices.",
    },
    {
        id: 2,
        title: "Tomate",
        github: "https://github.com/samanthacabrera/pomodoro",
        link: "https://samanthacabrera.github.io/pomodoro/",
        wip: false,
        deployed: true,
        year: "2025",
        desc: "Time Management Tool",
        techStack: ["Vite", "Tailwind CSS"],
        features: [
             "Start, pause, and reset controls with clear timer display.",
             "Responsive design for use on desktop and mobile devices."
        ],
        insights: "Building the this tool helped me practice precise state management in React, particularly in handling timers and intervals. I also focused on creating a minimal and distraction-free UI to enhance user productivity.",
    },
    {
        id: 3,
        title: "Swiftle",
        github: "https://github.com/samanthacabrera/swiftle",
        link: "https://samanthacabrera.github.io/swiftle/",
        wip: false,
        deployed: true,
        year: "2025",
        desc: "Song Matching Game",
        techStack: ["Vite", "Tailwind CSS"],
        features: [
            "Responsive and mobile-first design ensuring optimal play on any device.",
            "Real-time feedback to enhance user experience and maintain the flow of the game.",
        ],
        insights: "Swiftle challenged me to refine my front-end development skills, particularly in game logic and UI/UX design. I focused on creating dynamic state updates and smooth transitions to make the gameplay intuitive.",
    },
    {
        id: 4,
        title: "Hand Motion Tracker",
        github: "https://github.com/samanthacabrera/mediapipe-hand-tracker",
        link: "",
        wip: false,
        deployed: false,
        year: "2025",
        desc: "Real-time Motion Tracker",
        techStack: [ "Mediapipe", "TensorFlow" ],
        features: [
            "Hand gesture detection and visualization using Mediapipe.",
            "Integration with web camera feeds for hand tracking directly in the browser.",
            "Capability to detect and track both hands simultaneously."
            
        ],
        insights: "This project taught me how to integrate third-party libraries into my web applications, optimize performance for real-time interaction, and work with 3D visualization tools.",
    },
    {
        id: 5,
        title: "Algorithm Visualizer",
        github: "https://github.com/samanthacabrera/array-sorting-visualizer",
        link: "https://samanthacabrera.github.io/array-sorting-visualizer/",
        wip: false,
        deployed: true,
        year: "2025",
        desc: "Sorting Algorithm Visualizer",
        techStack: ["Vite", "Tailwind CSS"],
        features: [
            "Interactive visualizations for five popular sorting algorithms.",
            "Step-by-step animation highlighting the comparisons made by the algorithm.",
            "Clear, concise explanations for each algorithm.",
            "Adjustable animation speed to observe algorithm behavior at different rates."

        ],
        insights: "Working on this project deepened my appreciation for how sorting algorithms operate and how to make abstract concepts tangible through visualization. It also helped me grow more confident in managing state in React and structuring interactive applications.",
    },
    // {
    //     id: 6,
    //     title: "Typing Test",
    //     github: "https://github.com/samanthacabrera/typing-test",
    //     link: "https://samanthacabrera.github.io/typing-test/",
    //     wip: false,
    //     deployed: true,
    //     year: "2025",
    //     desc: "Typing Practice Tool",
    //     techStack: ["React", "Vite", "Tailwind CSS"],
    //     features: [
    //         "Real-time typing speed (WPM) and accuracy tracking.",
    //         "Randomized text passages to practice typing in different contexts.",
    //     ],
    //     insights: "This project was just for fun, but it taught me how to handle real-time metrics and update the UI dynamically as users type."
    // }
]

export default projects;