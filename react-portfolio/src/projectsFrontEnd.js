import employeeEbook from "./images/employee-ebook.png";
import foodHunt from "./images/project-01.png";
import weather from "./images/weather.png";
import trivia from "./images/timed-trivia.png";
import workday from "./images/workday.png";

const projectsFrontEnd = [
    {
        "id": 1,
        "image": employeeEbook,
        "name": "Employee Ebook",
        "deployedLink": "https://uyennguyen30696.github.io/employee-directory/",
        "githubLink": "https://github.com/uyennguyen30696/employee-directory", 
        "summary": "A single web application that allows easy access to non-sensitive data of employees at once. Employees can be sorted by names alphabetically.",
        "technologies": "ReactJS"
    },
    {
        "id": 2,
        "image": foodHunt,
        "name": "Food Hunt",
        "deployedLink": "https://uyennguyen30696.github.io/food-hunt-project-01/",
        "githubLink": "https://github.com/uyennguyen30696/project-01", 
        "summary": "A single page application that allows users to search for local restaurants and get direction to those restaurants.",
        "technologies": "Javascript, OpenStreetMap, Leaflet"
    },
    {
        "id": 3,
        "image": weather,
        "name": "Sky High Weather",
        "deployedLink": "https://uyennguyen30696.github.io/sky-high-weather/",
        "githubLink": "https://github.com/uyennguyen30696/hw6-weather-dashboard", 
        "summary": "A single page weather forecast application, which displays current weather and five day forecast.",
        "technologies": "Javascript, OpenWeather API"
    },
    {
        "id": 4,
        "image": trivia,
        "name": "Timed Trivia Game",
        "deployedLink": "https://uyennguyen30696.github.io/timed-trivia-game/intro.html",
        "githubLink": "https://github.com/uyennguyen30696/timed-trivia-game", 
        "summary": "A timed trivia game with multiple choice questions from a mad scientist.",
        "technologies": "Javascript"
    },
    {
        "id": 5,
        "image": workday,
        "name": "Workday Tracker",
        "deployedLink": "https://uyennguyen30696.github.io/workday-tracker/",
        "githubLink": "https://github.com/uyennguyen30696/hw5-workday-scheduler", 
        "summary": "A single page application for planning tasks during workday from 9am to 5pm.",
        "technologies": "Javascript, Luxon"
    }
]

export default projectsFrontEnd;
