async function getData() {
	const response = await fetch("http://localhost:3001");
	const data = await response.json();
	return data;
}

export default async function Home() {
	const data = await getData();
	return (
		<div>
			<h1>test message 123 : {data.message}</h1>
		</div>
	);
}
