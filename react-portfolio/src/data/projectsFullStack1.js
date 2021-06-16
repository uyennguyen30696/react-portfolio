import gameKeeperImg from "../images/game-keeper.png";
import confessionsImg from "../images/confessions.png";
import burgerImg from "../images/eat-da-burger.png";

const projectsFullStack1 = [
    {
        "id": 1,
        "image": gameKeeperImg,
        "name": "Game keeper",
        "deployedLink": "https://game-keeper-app.herokuapp.com/",
        "githubLink": "https://github.com/uyennguyen30696/game-keeper", 
        "summary": "A full stack secure authentication web application that helps users save and organize their board games.",
        "technologies": "Javascript, Sequelize, Passport-jwt"
    },
    {
        "id": 2,
        "image": confessionsImg,
        "name": "Confessions",
        "deployedLink": "https://confessions-by-uyen.herokuapp.com/",
        "githubLink": "https://github.com/uyennguyen30696/confessions", 
        "summary": "A social platform that allows users to post and share thoughts anonymously for stress relief.",
        "technologies": "MERN stack - MongoDb, Express, React, Node.js"
    },
    {
        "id": 3,
        "image": burgerImg,
        "name": "Eat-da-burger",
        "deployedLink": "https://eat-da-burger-app-by-uyen.herokuapp.com/",
        "githubLink": "https://github.com/uyennguyen30696/hw11-handlebars-node-express", 
        "summary": "A simple full stack application that demonstrates a restaurant order site.",
        "technologies": "Javascript, MySQL, Handlebars"
    }
]

export default projectsFullStack1;
