import { Fragment } from "react";

// eslint-disable-next-line react/prop-types
function ItemList({ items = [], completeItem, deleteItem }) {
	return (
		<>
			<h1 className="header">Todo List</h1>

			{items.length == 0 && "No todos added"}
			{items.map((item) => (
				<Fragment key={item.id}>
					<ul className="list">
						<li>
							<label>
								<input
									type="checkbox"
									value={item.checked}
									onChange={(e) => completeItem(e.target.checked, item.id)}
								/>
								{item.title}
							</label>
							<button
								className="btn btn-danger"
								onClick={() => deleteItem(item.id)}
							>
								Delete
							</button>
						</li>
					</ul>
				</Fragment>
			))}
		</>
	);
}

export default ItemList;
