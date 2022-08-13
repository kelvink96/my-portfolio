import React from 'react';
import HeroSection from "../components/Hero";
import Wrapper from "./Wrapper";
import {Helmet} from "react-helmet";
import ServicesSection from '../components/Services';
import {ServicesData} from '../data/servicesData';
import {Divider} from "@mantine/core";

const Landing = () => {
	return (
		<Wrapper>
			<Helmet>
				<title>Kelvin Kiptum</title>
			</Helmet>
			<HeroSection/>
			<Divider my="lg"/>
			<ServicesSection data={ServicesData.data}/>
		</Wrapper>
	);
};

export default Landing;
