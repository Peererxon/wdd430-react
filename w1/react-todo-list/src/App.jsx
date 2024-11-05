import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "./styles.css";
import NewTodoForm from "./NewTodoForm";

function App() {
	const [todos, setTodos] = useState(() => {
		const localValue = localStorage.getItem("todos");
		console.log(localValue);
		if (localValue == null) return [];

		return JSON.parse(localValue);
	});

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	function addTodo(title) {
		setTodos((currentTodos) => [
			...currentTodos,
			{ id: crypto.randomUUID(), title: title, completed: false },
		]);
	}

	function toggleTodo(completed, id) {
		setTodos((currentTodos) =>
			currentTodos.map((todoItem) => {
				if (todoItem.id === id) {
					return {
						...todoItem,
						completed,
					};
				}
				return todoItem;
			})
		);
	}

	function deleteTodo(id) {
		setTodos((currentTodos) => currentTodos.filter((todo) => todo.id != id));
	}
	return (
		<>
			<NewTodoForm addTodo={addTodo} />
			<ItemList
				items={todos}
				completeItem={toggleTodo}
				deleteItem={deleteTodo}
			/>
		</>
	);
}

export default App;
