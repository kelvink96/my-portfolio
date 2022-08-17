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

const About = () => {
	const {classes} = useStyles()
	return (
		<Wrapper>
			<Helmet>
				<title>About | Kelvin Kiptum</title>
			</Helmet>
			<Container>
				<Grid>
					<Col md={12} lg={7} className={classes.section}>
						<BioSection/>
					</Col>
					<Col md={12} lg={5} className={classes.section}>
						<EducationSection/>
						<MoreInfoSection/>
					</Col>
					<Col className={classes.section}>
						<SkillsSection data={SkillsData.data}/>
					</Col>
					<Col className={classes.section}>
						<WorkExperienceSection data={WorkExperienceData.data}/>
					</Col>
					<Col className={classes.section}>
						<CertificationSection data={AwardsLinks.data}/>
					</Col>
				</Grid>
			</Container>
		</Wrapper>
	);
};

export default About;
