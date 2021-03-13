import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import GameKeeperImg from "./images/game-keeper.png";
import BurgerImg from "./images/eat-da-burger.png";
import EmployeeEbookImg from "./images/employee-ebook.png";
import FoodHuntImg from "./images/project-01.png";
import WeatherImg from "./images/weather.png";
import TriviaImg from "./images/timed-trivia.png";
import WorkdayImg from "./images/workday.png";

function Carousels() {
    const location = useLocation();
    return (
        <Carousel>
            <Carousel.Item interval={2000}>
                <div>
                    <h4>Full stack</h4>
                    <div className="project d-flex flex-wrap justify-content-center">
                        <div className="card" id="game-keeper">
                            <div className="card-head">
                                <img src={GameKeeperImg} alt="Game keeper" />
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-7 link deployed-link">
                                        <Link to="https://game-keeper-app.herokuapp.com/" className={location.pathname = ""} target="_blank">
                                            Deployed link
                                        </Link>
                                    </div>
                                    <div className="col link github-link">
                                        <Link to="https://github.com/uyennguyen30696/game-keeper" className={location.pathname = ""} target="_blank">
                                            GitHub repo
                                        </Link>
                                    </div>
                                </div>
                                <br></br>
                                <h5>Game Keeper</h5>
                                <p>A full stack secure authentication web application that helps users save and organize their board
                                games.
                                <br></br>
                                    <em>Javascript, Sequelize, Passport-jwt</em>
                                </p>
                            </div>
                        </div>

                        <div className="card" id="burger">
                            <div className="card-head">
                                <img src={BurgerImg} alt="Eat Da Burger" />
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-7 link deployed-link">
                                        <Link to="https://eat-da-burger-app-by-uyen.herokuapp.com/" className={location.pathname = ""} target="_blank">
                                            Deployed link
                                        </Link>
                                    </div>
                                    <div className="col link github-link">
                                        <Link to="https://github.com/uyennguyen30696/hw11-handlebars-node-express" className={location.pathname = ""} target="_blank">
                                            GitHub repo
                                        </Link>
                                    </div>
                                </div>
                                <br></br>
                                <h5>Eat-da-burger</h5>
                                <p>A simple full stack application that demonstrates a restaurant order site.
                                <br></br>
                                    <em>Javascript, MySQL, Handlebars</em>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <div>
                    <h4>Front end</h4>
                    <div className="project d-flex flex-wrap justify-content-center">
                        <div className="card" id="employee-ebook">
                            <div className="card-head">
                                <img className="img-project" src={EmployeeEbookImg} alt="Employee Ebook" />
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-7 link deployed-link">
                                        <Link to="https://uyennguyen30696.github.io/employee-directory/" className={location.pathname = ""} target="_blank">
                                            Deployed link
                                        </Link>
                                    </div>
                                    <div className="col link github-link">
                                        <Link to="https://github.com/uyennguyen30696/employee-directory" className={location.pathname = ""} target="_blank">
                                            GitHub repo
                                        </Link>
                                    </div>
                                </div>
                                <br></br>
                                <h5>Employee Ebook</h5>
                                <p>A single web application that allows easy access to non-sensitive data of employees at once.
                                Employees can be sorted by names alphabetically.
                                <br></br>
                                    <em>ReactJS</em>
                                </p>
                            </div>
                        </div>

                        <div className="card" id="food-hunt">
                            <div className="card-head">
                                <img className="img-project" src={FoodHuntImg} alt="Project 1 - Food hunt" />
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-7 link deployed-link">
                                        <Link to="https://uyennguyen30696.github.io/food-hunt-project-01/" className={location.pathname = ""} target="_blank">
                                            Deployed link
                                        </Link>
                                    </div>
                                    <div className="col link github-link">
                                        <Link to="https://github.com/uyennguyen30696/project-01" className={location.pathname = ""} target="_blank">
                                            GitHub repo
                                        </Link>
                                    </div>
                                </div>
                                <br></br>
                                <h5>Food Hunt</h5>
                                <p>A single page application that allows users to search for local restaurants and get direction to
                                those
                                restaurants.
                                <br></br>
                                    <em>Javascript, OpenStreetMap, Leaflet</em>
                                </p>
                            </div>
                        </div>

                        <div className="card" id="weather">
                            <div className="card-head">
                                <img className="img-project" src={WeatherImg} alt="Weather Dashboard" />
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-7 link deployed-link">
                                        <Link to="https://uyennguyen30696.github.io/sky-high-weather/" className={location.pathname = ""} target="_blank">
                                            Deployed link
                                        </Link>
                                    </div>
                                    <div className="col link github-link">
                                        <Link to="https://github.com/uyennguyen30696/hw6-weather-dashboard" className={location.pathname = ""} target="_blank">
                                            GitHub repo
                                        </Link>
                                    </div>
                                </div>
                                <br></br>
                                <h5>Sky High Weather</h5>
                                <p>A single page weather forecast application, which displays current weather and five day forecast.
                                <br></br>
                                    <em>Javascript, OpenWeather API</em>
                                </p>
                            </div>
                        </div>

                        <div className="card" id="quiz">
                            <div className="card-head">
                                <img className="img-project" src={TriviaImg} alt="Timed trivia game" />
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-7 link deployed-link">
                                        <Link to="https://uyennguyen30696.github.io/timed-trivia-game/intro.html" className={location.pathname = ""} target="_blank">
                                            Deployed link
                                        </Link>
                                    </div>
                                    <div className="col link github-link">
                                        <Link to="https://github.com/uyennguyen30696/timed-trivia-game" className={location.pathname = ""} target="_blank">
                                            GitHub repo
                                        </Link>
                                    </div>
                                </div>
                                <br></br>
                                <h5>Timed Trivia Game</h5>
                                <p>A timed trivia game with multiple choice questions from a mad scientist.
                                <br></br>
                                    <em>Javascript</em>
                                </p>
                            </div>
                        </div>

                        <div className="card" id="workday">
                            <div className="card-head">
                                <img className="img-project" src={WorkdayImg} alt="Workday schechuler" />
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-7 link deployed-link">
                                        <Link to="https://uyennguyen30696.github.io/workday-tracker/" className={location.pathname = ""} target="_blank">
                                            Deployed link
                                        </Link>
                                    </div>
                                    <div className="col link github-link">
                                        <Link to="https://github.com/uyennguyen30696/hw5-workday-scheduler" className={location.pathname = ""} target="_blank">
                                            GitHub repo
                                        </Link>
                                    </div>
                                </div>
                                <br></br>
                                <h5>Workday Tracker</h5>
                                <p>A single page application for planning tasks during workday from 9am to 5pm.
                                 <br></br>
                                    <em>Javascript, Luxon</em>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Carousels;
