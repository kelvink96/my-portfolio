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
		<Card
			key={d.company}
			className={classes.card}
			p="md"
			shadow="md"
			withBorder
			radius="xs"
		>
			<Text weight={600} mb="sm">{d.role}</Text>
			<Text>{d.company}</Text>
			<Text>{d.startPeriod} - {d.endPeriod}</Text>
			<Text>{d.location}</Text>
		</Card>
	)

	return (
		<Box py="xl">
			<Title mb="lg">Experience</Title>
			<SimpleGrid
				cols={2}
				breakpoints={[
					{maxWidth: 'md', cols: 3, spacing: 'md'},
					{maxWidth: 'sm', cols: 2, spacing: 'sm'},
					{maxWidth: 'xs', cols: 1, spacing: 'sm'},
				]}
			>
				{items}
			</SimpleGrid>
		</Box>
	);
};

export default WorkExperience;
