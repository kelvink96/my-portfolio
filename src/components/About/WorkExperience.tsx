import React from 'react';
import {Box, Card, Container, createStyles, SimpleGrid, Text, Title} from "@mantine/core";
import {UserCircle} from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
	card: {
		textAlign: 'left'
	}
}));

interface WorkExperienceProps {
	data: {
		role: string
		company: string
		startPeriod: string
		endPeriod: string
		location: string
	}[];
}

const WorkExperience = ({data}: WorkExperienceProps) => {
	const {classes} = useStyles()

	const items = data.map(d =>
		<Card className={classes.card} p="md" withBorder>
			<Text>{d.role}</Text>
			<Text>{d.company}</Text>
			<Text>{d.startPeriod} - {d.endPeriod}</Text>
			<Text>{d.location}</Text>
		</Card>
	)

	return (
		<Container>
			<Box>
				<Title>Experience</Title>
			</Box>
			<SimpleGrid cols={2}>
				{items}
			</SimpleGrid>
		</Container>
	);
};

export default WorkExperience;
