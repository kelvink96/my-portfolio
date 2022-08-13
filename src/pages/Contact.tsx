import React from 'react';
import Wrapper from "./Wrapper";
import ContactSection from "../components/Contact";
import {Helmet} from "react-helmet";

const Contact = () => {
	return (
		<Wrapper>
			<Helmet>
				<title>Contact | Kelvin Kiptum</title>
			</Helmet>
			<ContactSection/>
		</Wrapper>
	);
};

export default Contact;
