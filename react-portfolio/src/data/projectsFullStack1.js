import gameKeeperImg from "../images/game-keeper.png";
import confessionsImg from "../images/confessions.png";

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
    }
]

export default projectsFullStack1;
