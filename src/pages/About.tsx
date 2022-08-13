import React from 'react';
import Wrapper from "./Wrapper";
import {Container, createStyles, Grid} from "@mantine/core";
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

const {Col} = Grid

const About = () => {
	return (
		<Wrapper>
			<Container>
				<Grid>
					<Col span={8}>
						<BioSection/>
						<EducationSection/>
					</Col>
					<Col span={4}>
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
