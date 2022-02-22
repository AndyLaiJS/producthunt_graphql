import { useEffect, useState } from "react";

const Dropdown = (props) => {
	const [show, setShow] = useState(false);

	const dropDownOptions = ["VOTES", "RANKING", "NEWEST", "FEATURED"];

	const showMenu = () => {
		console.log(!show);
		setShow(!show);
	};

	return (
		<button
			onBlur={showMenu}
			onFocus={showMenu}
			className="relative text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-center"
		>
			<div className="px-3 py-3">{props.selection}</div>

			<div
				className={
					show
						? "absolute z-10 w-44 text-base list-none bg-white rounded shadow"
						: "hidden absolute z-10 w-44 text-base list-none bg-white rounded shadow"
				}
			>
				<ul
					className="text-black text-sm font-normal py-2 text-left"
					aria-labelledby="dropdownButton"
				>
					{dropDownOptions.map((listItems, index) => (
						<li
							onClick={props.toggleOrder}
							key={index}
							className="p-2 hover:bg-slate-300"
						>
							{listItems}
						</li>
					))}
				</ul>
			</div>
		</button>
	);
};

export default Dropdown;
