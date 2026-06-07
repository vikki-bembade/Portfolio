import jokeS from '../assets/jokeS.svg'
import reactLogo from '../assets/react.svg'
import htmlLogo from '../assets/html.svg'
import todos from '../assets/todos.svg'
import weathers from '../assets/weathers.svg'
import rating from '../assets/rating.svg'
import career from '../assets/career.svg'

const projects = [
    {
        name: 'Store rating application',
        img : rating,
        description: 'Built a Store Rating Application using React, Node.js, Express.js, JavaScript, and Neon PostgreSQL, enabling users to rate stores and manage reviews through a responsive web interface.',
        technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'Express.js', 'Node.js', 'Neon PostgreSQL'],
        link: 'https://roxiler-systems-frontend-pi.vercel.app/'
    },
    {
        name: 'Career App',
        img : career,
        description: 'Developed a responsive web application using React, Tailwind CSS, and REST APIs for dynamic data management and seamless user experience.',
        technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'API Integration'],
        link: 'https://career-app-blush.vercel.app/'
    },
    {
        name: 'Joke Application using API',
        img : jokeS,
        description: 'Built a simple Joke App using HTML, CSS, and JavaScript. The app fetches jokes from a public API and updates the UI with a fresh joke on every button click. This helped improve my understanding of async JavaScript and DOM interaction.',
        technologies: ['html', 'CSS', 'JavaScript', 'API Integration'],
        link: 'https://jokes-app-phi.vercel.app/'
    },
    {
        name: 'TODO application',
        img: todos,
        description: 'A responsive TODO application built with React and Tailwind CSS. It features a clean hero section, animated cards, and a modern projects carousel, all optimized for desktop and mobile layouts.',
        technologies: ['HTML', 'CSS', 'JavaScript','Local Storage'],
        link: 'https://todo-app-phi-seven-20.vercel.app/'
    },
    {
        name: 'Weather Dashboard',
        img: weathers,
        description: 'Created a weather dashboard interface using HTML and CSS that highlights cards, charts, and navigation controls. The layout is designed to keep content inside the card with scrollable description when text is long.',
        technologies: ['HTML', 'CSS', 'JavaScript','API Integration'],
        link: 'https://weather-app-psi-ten-37.vercel.app/'
    }
];

export default projects;