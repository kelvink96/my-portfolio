import React from 'react';
import Wrapper from "./Wrapper";
import ContactSection from "../components/Contact";
import {Helmet} from "react-helmet";
import {createStyles} from "@mantine/core";

const useStyles = createStyles((theme) => ({
	section: {
		paddingTop: theme.spacing.xl * 2,
		paddingBottom: theme.spacing.xl * 2,

		[theme.fn.smallerThan('sm')]: {
			paddingTop: theme.spacing.lg,
			paddingBottom: theme.spacing.lg,
		}
	},
}));

const Contact = () => {
	const {classes} = useStyles()
	return (
		<Wrapper>
			<Helmet>
				<title>Contact | Kelvin Kiptum</title>
			</Helmet>
			<div className={classes.section}>
				<ContactSection/>
			</div>
		</Wrapper>
	);
};

export default Contact;
