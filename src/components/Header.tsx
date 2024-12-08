import Link from "next/link";
import { Container } from "./Container";

export const Header = () => {
	return (
		<>
			<header className='bg-background-contrast text-primary min-h-12 px-6'>
				<Link
					href={"/"}
					className='min-h-12 flex items-center px-6 -ml-6'
				>
					Logo
				</Link>
			</header>
			<StickyHeader />
		</>
	);
};

const StickyHeader = () => {
	return (
		<div className='min-h-12 text-primary bg-background sticky top-0 flex items-center px-6 -ml-6'>
			<Container>Apple TV +</Container>
		</div>
	);
};
