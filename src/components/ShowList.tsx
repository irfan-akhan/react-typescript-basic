import React, { ReactElement } from "react";
type USER = {
	users: {
		firstName: string;
		lastName: string;
		age: number;
	}[];
};

function renderUsers(users: USER["users"]) {
	return users.map((user, idx) => (
		<li key={idx}>{user.firstName + " " + user.lastName}</li>
	));
}

const ShowList = (props: USER) => {
	return (
		<div>
			<h1>USERS </h1>
			{renderUsers(props.users)}
		</div>
	);
};

export default ShowList;
