import Image from "next/image";
import JellyBean from "./JellyBean";

const Card = (props) => {
	const id = props.ID;
	const thumbnailURL = props.thumbURL;
	const name = props.name;
	const tagline = props.tagline;
	const topics = props.topics;
	const link = props.link;
	return (
		<div
			key={id}
			className="active:shadow-none hover:shadow-lg m-4 text-left rounded-lg transition-all border-x border-y border-gray-100 text-ellipsis overflow-hidden"
		>
			<a href={link} target="_blank">
				<div>
					<Image
						src={thumbnailURL}
						layout="responsive"
						width="50px"
						height="50px"
					></Image>
				</div>
				<div className="m-4">
					<h2 className="text-3xl font-bold"> {name} </h2>
					<p className="text-base font-light py-1">{tagline}</p>
				</div>
				{/* <div className="m-4">
					{topics.map((item, index) => (
						<span
							key={index}
							className="inline-block w-auto m-1 px-3 py-1 rounded-full text-xs bg-slate-500 text-white"
						>
							{item.node.name}
						</span>
					))}
				</div> */}
				<JellyBean topics={topics} />
			</a>
		</div>
	);
};

export default Card;
