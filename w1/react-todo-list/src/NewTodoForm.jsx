import { useState } from "react";

function NewTodoForm({ addTodo }) {
	const [newItem, setnewItem] = useState("");
	function handleSubmit(e) {
		e.preventDefault();
		if (newItem == "") return;

		addTodo(newItem);
		setnewItem("");
	}
	return (
		<form className="new-item-form" onSubmit={handleSubmit}>
			<div className="form-row">
				<label htmlFor="item">New Item</label>
				<input
					type="text"
					value={newItem}
					onChange={(e) => setnewItem(e.target.value)}
					id="item"
				/>
			</div>
			<button className="btn">Add</button>
		</form>
	);
}

export default NewTodoForm;
