const JellyBean = (props) => {
	const topics = props.topics;

	return (
		<div className="m-4">
			{topics.map((item, index) => (
				<span
					key={index}
					className="inline-block w-auto m-1 px-3 py-1 rounded-full text-xs bg-slate-500 text-white"
				>
					{item.node.name}
				</span>
			))}
		</div>
	);
};

export default JellyBean;
