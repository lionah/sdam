interface HeadingProps {
	subtitle?: string;
	title: string;
}

function Heading({ title, subtitle }: HeadingProps) {
	return (
		<>
			<h1>{title}</h1>
			{subtitle && <p className="subtitle">{subtitle}</p>}
		</>
	);
}

export default Heading;