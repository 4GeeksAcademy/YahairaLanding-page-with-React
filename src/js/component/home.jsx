import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./Card";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Card/>
		</div>
	);
};

export default Home;
