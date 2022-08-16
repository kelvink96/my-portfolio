import React, {ReactNode} from 'react';
import {headerLinks} from "../data/headerLinks";
import AppNav from "../components/AppNav";
import {FooterSection} from "../components/Footer";
import {createStyles} from "@mantine/core";

interface WrapperProps {
	children: ReactNode
}

const useStyles = createStyles((theme) => ({
	body: {
		backgroundColor: theme.colors.gray[1]
	},
}));

const Wrapper = ({children}: WrapperProps) => {
	const {classes} = useStyles()
	return (
		<div className={classes.body}>
			<AppNav links={headerLinks.links}/>
			{children}
			<FooterSection/>
		</div>
	);
};

export default Wrapper;
