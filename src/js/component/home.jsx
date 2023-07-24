import React, { useState } from "react";

//create your first component
const Home = () => {
	const [task, newTask] = useState("");
	const [taskList, setTaskList] = useState([]);
	const [edit, editTask] = useState("");

	const validateTask = () => {
		if (task === "") {
			alert("ADD TASK");
			return false;
		} else {
			return true;
		}
	};
	const deleteTask = (index) => {
		setTaskList(taskList.filter((e, i) => i !== index));
	};

	return (
		<div className="todoList">
			<header>
				<h1>
					<strong>TODO LIST</strong>
				</h1>
			</header>
			<form className="todoForm" onSubmit={(e) => {
				e.preventDefault();
				if (validateTask()) {
					setTaskList([...taskList, task]);
					newTask("");
				};
			}}>
				<div className="inputTask">
					<input
						type="text"
						className="form-control inputArea"
						placeholder="Add Task!"
						onChange={(e) => {
							newTask(e.target.value)
						}}
						value={task}
					/>
				</div>
				<div className="submitTask">
					<button
						type="submit"
						className="btn btn-primary mb-3"
					>
						Confirm Task
					</button>
				</div>
			</form>
			<table>
				{taskList.length === 0 ? "" : 
					(<tr>
						<th className="number">N°</th>
						<th className="task">TASK</th>
						<th className="delete">DELETE</th>
					</tr>)
				}
				{taskList.map((e, i) => (
					<tr key={i + 1}>
						<td>{i + 1}</td>
						<td>{e}</td>
						<td>
							<strong>
								<button
									className="btn"
									onClick={() => deleteTask(i)}
								>
									<i className="fa-solid fa-trash-can"></i>
								</button>
							</strong>
						</td>
					</tr>
				))}
			</table>
			<div className="text-center">
				<p>
					<strong>
						{taskList.length === 0 ? "Add Task" : `${taskList.length} missing tasks`}
					</strong>
				</p>
			</div>
		</div>
	);
};

export default Home;
