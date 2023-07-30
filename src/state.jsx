import {User} from './User'
export default App;
import { useState } from 'react';

function App() {
	const [age, setAge] =useState(0);

	const changeNumber = ()=> {
		setAge(1);
	}
	console.log('hi')
	return (
		<div>
			<button onClick={changeNumber}> Click here! </button>
			{age}
	</div>
	)
}
/////////////////////////////

import {User} from './User'
export default App;
import { useState } from 'react';

function App() {
	const [input, setInput]= useState("");

	const inputValue = (event)=> {
		setInput(event.target.value);
	}

	return (
		<div>
			<input type="text" onChange={inputValue} />
			{input}
	</div>
	)
}

