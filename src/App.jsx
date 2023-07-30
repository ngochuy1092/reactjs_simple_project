import {User} from './User'
export default App;
import { useState } from 'react'

function App() {
	const [color, setColor]= useState("red");
	const changeColor= ()=> {
		setColor(color === "red" ? "pink":"red");
	} 

	return (
		<div>
			<button onClick={changeColor}> Change color </button>
			{<h1  style={{color:color}}> Hi </h1>}
	</div>
	);
}

