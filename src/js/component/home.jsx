import React, { useState } from "react";

//create your first component
const Home = () => {
	const [ inputValue, setInputValue ] = useState("");
	const [ toDos, setToDos ] = useState([]);

	const handleInputValue = (e) => {
		setInputValue(e.target.value)
	}

	const addInputValue = (e) => {
		if (e.key === "Enter"){
			setToDos(toDos.concat(inputValue));
			setInputValue("")
		}
	}


	return (
		<div className="text-center container">
			<h1>My ToDo</h1>
			<ul>
				<li><input type="text" placeholder="What do you need to do?" value={inputValue} onChange={handleInputValue} onKeyDown={addInputValue}></input></li>
				{toDos.map((t, index) =>(
					<li>{t.toUpperCase()}<i className="far fa-trash-alt m-1" onClick={() => setToDos(toDos.filter((t, currentIndex) => index != currentIndex))}></i></li>
				))}
			</ul>
			<div className="taskTotal">{toDos.length} tasks left</div>
		</div>
	);
};

export default Home;
