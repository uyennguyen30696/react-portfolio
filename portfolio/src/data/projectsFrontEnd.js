import employeeEbook from "../images/projects/employee-ebook.png";
import volcano from "../images/projects/interactive-volcano-plot.png";
import weather from "../images/projects/weather.png";
import triviaImg from "../images/projects/timed-trivia.png";
import workday from "../images/projects/workday.png";

const projectsFrontEnd = [
    {
        "id": 1,
        "image": employeeEbook,
        "name": "Employee Ebook",
        "deployedLink": "https://uyennguyen30696.github.io/employee-directory/",
        "githubLink": "https://github.com/uyennguyen30696/employee-directory", 
        "summary": "A single web application that allows easy access to non-sensitive data of employees at once.",
        "technologies": "ReactJS"
    },
    {
        "id": 2,
        "image": volcano,
        "name": "Interactive Volcano Plot",
        "deployedLink": "https://uyennguyen30696.shinyapps.io/shiny_app_DEG/",
        "githubLink": "https://github.com/uyennguyen30696/interactive_volcano_plot", 
        "summary": "An R shiny web application for interactive volcano plot to visualize pre-processed bioinformatics data.",
        "technologies": "R, R Shiny"
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
        "image": triviaImg,
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