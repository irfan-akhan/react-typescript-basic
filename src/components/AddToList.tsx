import React, { useState } from "react";
type InitialValues = {
	name: string;
	address: string;
	age: string;
};
const initialInput = { address: "", name: "", age: "" };

const AddToList = () => {
	const [inputValues, setInputValues] = useState<InitialValues>(initialInput);
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setInputValues({ ...inputValues, [e.target.name]: e.target.value });
	};
	const submitHanler = (e: React.MouseEvent<HTMLInputElement>): void => {
		setInputValues(initialInput);
	};
	return (
		<div>
			<form
				style={{
					display: "flex",
					flexDirection: "column",
					margin: "auto",
					width: "50%",
				}}
			>
				<input
					onChange={changeHandler}
					type="text"
					placeholder="Name"
					value={inputValues.name}
					name="name"
				/>
				<input onChange={changeHandler} type="text" placeholder="age" />
				<input
					onChange={changeHandler}
					type="text"
					placeholder="Address"
					value={inputValues.address}
					name="address"
				/>
				<input
					onChange={changeHandler}
					type="number"
					placeholder="age"
					name="age"
					value={parseInt(inputValues.age)}
				/>

				<input onClick={(e) => submitHanler} type="submit" />
			</form>
		</div>
	);
};
export default AddToList;
