import React from "react";

let styleC={
    width: "18rem"
}



//create your first component
const Card = (props) => {
    return (
        <div className="container1">

            <div className="card" style={styleC}>
                <img src="..." class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </div>
    );
};

export default Card;
