import React from "react";

export default function Card(props){
    return(
        <div className="card">
            <div className="card--image">
                <img src={props.imageUrl} />
            </div>

            <div className="card--stats">
                <div className="card--title">
                    <img src="./images/path.png" alt="" />
                    <h4>{props.location}</h4>
                    <a href={props.googleMapsUrl}> View on Google Maps</a>
                </div>

                <h1>{props.title}</h1>
                <h5>{props.startDate} - {props.endDate}</h5>
                <p>{props.description}</p>

            </div>



        </div>
    )
}