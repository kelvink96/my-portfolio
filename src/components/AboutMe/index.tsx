import React from 'react';
import {Box, Card, Container, createStyles, List, SimpleGrid, Tabs, Text, Title} from '@mantine/core'
import {
	BuildingCommunity,
	Certificate,
	DeviceGamepad2,
	InfoCircle,
	Language,
	MessageCircle,
	Photo,
	Settings
} from "tabler-icons-react";
import WorkExperience from "./WorkExperience";
import {WorkExperienceData} from "../../data/workExperienceData";
import Certifications from "./Certifications";
import {AwardsLinks} from "../../data/awardsLinks";

const {Tab} = Tabs
const {Item} = List

const useStyles = createStyles((theme) => ({
	content: {
		textAlign: "left"
	}
}))

const AboutMeSection = () => {
	const {classes} = useStyles()

	return (
		<Container>
			<Box>
				<Title>About Me</Title>
				<Text align="left">
					Experienced Graphic Design Specialist with a demonstrated history of working in the computer and network
					security industry. Skilled in Microsoft Excel, Customer Service, Microsoft Word, Public Speaking, and
					Microsoft Office. Strong professional with a Software Engineering focused in Computer Programming, Specific
					Applications from Kisii University
				</Text>
			</Box>
			<Tabs tabPadding="md" grow>
				<Tab label="Work Experience" icon={<Settings size={14}/>}>
					<WorkExperience data={WorkExperienceData.data}/>
				</Tab>
				<Tab label="Certifications" icon={<Certificate size={14}/>}>
					<Certifications data={AwardsLinks.data}/>
				</Tab>
				<Tab label="Education" icon={<BuildingCommunity size={14}/>}>
					<Card className={classes.content}>
						<Text weight={500} mb="sm">Bachelor of Science in Software Engineering</Text>
						<Text>Kisii University</Text>
						<Text>2014 - 2018</Text>
					</Card>
				</Tab>
				<Tab label="More info" icon={<InfoCircle size={14}/>}>
					<SimpleGrid cols={3}>
						<Card className={classes.content}>
							<Title mb="md"><Language/> Languages</Title>
							<List type="ordered">
								<Item>Swahili</Item>
								<Item>English</Item>
							</List>
						</Card>
						<Card className={classes.content}>
							<Title mb="md"><DeviceGamepad2/> Hobbies</Title>
							<List type="ordered" size="md">
								<Item>Gaming</Item>
								<Item>Hiking</Item>
								<Item>Listening to music</Item>
								<Item>Watching movies</Item>
							</List>
						</Card>
					</SimpleGrid>
				</Tab>
			</Tabs>
		</Container>
	);
};

export default AboutMeSection;
