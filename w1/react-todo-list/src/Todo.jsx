import { useState } from "react";

function Todo() {
	const [item, setItem] = useState([]);

	function handleClick(e) {
		e.preventDefault();
		setItem([
			...item,
			{
				description: e.target.value,
				done: false,
			},
		]);
	}
	return (
		<>
			<form className="new-item-form" action="">
				<div className="form-row">
					<label htmlFor="item">New Item</label>
					<input type="text" id="item" />
				</div>
				<button className="btn" onClick={handleClick}>
					Add
				</button>
			</form>
		</>
	);
}

export default Todo;
