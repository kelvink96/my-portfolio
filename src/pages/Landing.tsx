import React from 'react';
import HeroSection from "../components/Hero";
import Wrapper from "./Wrapper";
import {Helmet} from "react-helmet";
import ServicesSection from '../components/Services';
import {ServicesData} from '../data/servicesData';
import {createStyles, Divider} from "@mantine/core";

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

const Landing = () => {
	const {classes} = useStyles()

	return (
		<Wrapper>
			<Helmet>
				<title>Kelvin Kiptum</title>
			</Helmet>
			<div className={classes.section}>
				<HeroSection/>
			</div>
			<Divider my="lg"/>
			<div className={classes.section}>
				<ServicesSection data={ServicesData.data}/>
			</div>
		</Wrapper>
	);
};

export default Landing;
