import React from 'react';
import {Card, createStyles, SimpleGrid, Text} from "@mantine/core";

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
		<Card className={classes.card}>
			<Text>{d.role}</Text>
			<Text>{d.company}</Text>
			<Text>{d.startPeriod} - {d.endPeriod}</Text>
			<Text>{d.location}</Text>
		</Card>
	)

	return (
		<SimpleGrid cols={3}>
			{items}
		</SimpleGrid>
	);
};

export default WorkExperience;
