interface HeadingProps {
	subtitle?: string;
	title: string;
}

function Heading({ title, subtitle }: HeadingProps) {
	return (
		<>
			<h1>{title}</h1>
			{subtitle && <h2>{subtitle}</h2>}
		</>
	);
}

export default Heading;