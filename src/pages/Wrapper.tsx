import React, {ReactNode} from 'react';
import {headerLinks} from "../data/headerLinks";
import AppNav from "../components/AppNav";
import {FooterSection} from "../components/Footer";

interface WrapperProps {
	children: ReactNode
}

const Wrapper = ({children}: WrapperProps) => {
	return (
		<div>
			<AppNav links={headerLinks.links}/>
			{children}
			<FooterSection/>
		</div>
	);
};

export default Wrapper;
