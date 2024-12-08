import React from "react";

interface IContainerProps {
	children: React.ReactNode;
	className?: string;
}

export const Container = ({ children, className }: IContainerProps) => {
	return (
		<div className='mx-auto max-w-[1200px] px-6 text-ellipsis bg-background'>
			{children}
		</div>
	);
};
