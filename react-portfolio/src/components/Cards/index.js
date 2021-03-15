import React from "react";
import { Link, useLocation } from "react-router-dom";

function Card(props) {
    const location = useLocation();
    return (
        <div>
            <div className="card" id={props.id}>
                <div className="card-head">
                    <img src={props.image} alt={props.name} />
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-7 link deployed-link">
                            <Link to={props.deployedLink} className={location.pathname = ""} target="_blank">
                                Deployed link
                            </Link>
                        </div>
                        <div className="col link github-link">
                            <Link to={props.githubLink} className={location.pathname = ""} target="_blank">
                                GitHub repo
                            </Link>
                        </div>
                    </div>
                    <br></br>
                    <h5>{props.name}</h5>
                    <p>{props.summary}
                        <br></br>
                        <em>{props.technologies}</em>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Card;
