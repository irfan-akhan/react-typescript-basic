import { FC } from "react";

export interface IProps {
	children: JSX.Element | JSX.Element[];
	state: Boolean;
	setState: () => void;
}

export const Modal: FC<IProps> = ({ children, state, setState }) => {
	if (!state) return null;
	return (
		<div
			style={{
				width: "100vw",
				zIndex: "100",
				position: "fixed",
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
			}}
		>
			{/* <button onClick={setState}>X</button> */}
			{children}
		</div>
	);
};
