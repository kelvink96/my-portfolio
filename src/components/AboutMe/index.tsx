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
			<Tabs defaultValue="Work Experience">
				<Tabs.List>
					<Tabs.Tab value="Work Experience" icon={<Settings size={14}/>}>Work Experience</Tabs.Tab>
					<Tabs.Tab value="Certifications" icon={<Certificate size={14}/>}>Certifications</Tabs.Tab>
					<Tabs.Tab value="Education" icon={<BuildingCommunity size={14}/>}>Education</Tabs.Tab>
					<Tabs.Tab value="More Info" icon={<BuildingCommunity size={14}/>}>More Info</Tabs.Tab>
				</Tabs.List>
				<Tabs.Panel value="Work Experience" pt="xs">
					<WorkExperience data={WorkExperienceData.data}/>
				</Tabs.Panel>
				<Tabs.Panel value="Certifications" pt="xs">
					<Certifications data={AwardsLinks.data}/>
				</Tabs.Panel>
				<Tabs.Panel value="Education" pt="xs">
					<Card className={classes.content}>
						<Text weight={500} mb="sm">Bachelor of Science in Software Engineering</Text>
						<Text>Kisii University</Text>
						<Text>2014 - 2018</Text>
					</Card>
				</Tabs.Panel>
				<Tabs.Panel value="More Info" pt="xs">
					<SimpleGrid cols={3}>
						<Card className={classes.content}>
							<Title mb="md"><Language/> Languages</Title>
							<List type="ordered">
								<List.Item>Swahili</List.Item>
								<List.Item>English</List.Item>
							</List>
						</Card>
						<Card className={classes.content}>
							<Title mb="md"><DeviceGamepad2/> Hobbies</Title>
							<List type="ordered" size="md">
								<List.Item>Gaming</List.Item>
								<List.Item>Hiking</List.Item>
								<List.Item>Listening to music</List.Item>
								<List.Item>Watching movies</List.Item>
							</List>
						</Card>
					</SimpleGrid>
				</Tabs.Panel>
			</Tabs>
		</Container>
	);
};

export default AboutMeSection;
