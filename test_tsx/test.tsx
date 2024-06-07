export default () => {
	const a: number = 2
	return (
		<div>
			<h1>Hello World</h1>
			<p>{a}</p>
			<style jsx>{`
				p {
					font-size: 12px;
				}
			`}</style>
		</div>
	)
}
