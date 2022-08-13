import React from 'react';
import Wrapper from "./Wrapper";
import {Container, createStyles, Divider, Grid} from "@mantine/core";
import {
	BioSection,
	CertificationSection,
	EducationSection,
	MoreInfoSection,
	SkillsSection,
	WorkExperienceSection
} from "../components/About";
import {SkillsData} from '../data/skillsData';
import {AwardsLinks} from '../data/awardsLinks';
import {WorkExperienceData} from '../data/workExperienceData';
import {Helmet} from "react-helmet";

const {Col} = Grid

const About = () => {
	return (
		<Wrapper>
			<Helmet>
				<title>About | Kelvin Kiptum</title>
			</Helmet>
			<Container>
				<Grid>
					<Col span={7} pb="xl">
						<BioSection/>
					</Col>
					<Col span={5} pb="xl">
						<EducationSection/>
						<MoreInfoSection/>
					</Col>
					<Col>
						<SkillsSection data={SkillsData.data}/>
					</Col>
					<Col>
						<WorkExperienceSection data={WorkExperienceData.data}/>
					</Col>
					<Col>
						<CertificationSection data={AwardsLinks.data}/>
					</Col>
				</Grid>
			</Container>
		</Wrapper>
	);
};

export default About;
