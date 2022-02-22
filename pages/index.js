import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import Dropdown from "../components/Dropdown";

export default function Home() {
	const [selection, setSelection] = useState("VOTES");
	const [queryResult, setQueryResult] = useState();
	const [error, setError] = useState();

	const fetchProductHuntAPI = async () => {
		const response = await fetch("https://api.producthunt.com/v2/api/graphql", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_PRODUCT_HUNT_ACCESS_TOKEN}`,
				Host: "api.producthunt.com",
			},
			body: JSON.stringify({
				query: `query {
          posts(first: 20, order: ${selection}) {
            edges {
              node {
                id
                name
                description
                website
                tagline
                topics {
                  edges {
                    node {
                      name
                    }
                  }
                }
                thumbnail {
                  url
                }
                makers {
                  name
                }
              }
            }
          }
        }`,
			}),
		});

		console.log(
			response.headers.forEach((val, name) => {
				console.log(name + ": " + val);
			})
		);

		const data = await response.json();

		try {
			const contents = data.data.posts.edges;
			setQueryResult(contents);
		} catch (e) {
			setError(data.errors[0]);
		}
	};

	const toggleOrder = (opt) => {
		opt = opt.target.textContent;
		if (opt === "FEATURED") {
			opt = "FEATURED_AT";
		}
		setSelection(opt);
	};

	useEffect(() => {
		setQueryResult(null);
		setError(null);
		fetchProductHuntAPI();
	}, [setSelection, selection]);

	return (
		<div className={styles.container}>
			<Head>
				<title>LJS GraphQL</title>
				<meta name="description" content="Built with passion and love" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className="text-6xl font-bold text-center">Lai Jian Shin's</h1>
				<h1 className="text-5xl font-medium text-center"> GraphQL</h1>

				<p className={styles.description}>
					Made exclusively with NextJS and Tailwind CSS
				</p>

				{queryResult && !error && (
					<Dropdown toggleOrder={toggleOrder} selection={selection} />
				)}

				<div className="container mx-auto">
					<div className="grid gap-y-1 grid-cols-1 md:grid-cols-3 2xl:grid-cols-4">
						{queryResult &&
							!error &&
							queryResult.map((item) => (
								<Card
									key={item.node.id}
									ID={item.node.id}
									thumbURL={item.node.thumbnail.url}
									name={item.node.name}
									tagline={item.node.tagline}
									topics={item.node.topics.edges}
									link={item.node.website}
								></Card>
							))}
					</div>
					<div>
						{!queryResult && !error && (
							<p className="flex justify-center w-full text-center m-auto text-4xl text-blue-600">
								Loading...
							</p>
						)}
						{error && (
							<p className="flex justify-center w-full text-center m-auto text-4xl text-bold text-red-500">
								API Error: {error.error}. <br></br>
								Please wait {error.details.reset_in} seconds
							</p>
						)}
					</div>
				</div>
			</main>

			<footer className={styles.footer}>
				Built by Lai Jian Shin for <b className="px-1">WeMakeApp</b>
			</footer>
		</div>
	);
}
