import React from 'react';
import {Timeline, Text, Container, Title, Box, SimpleGrid, List, Group, Card, Grid} from '@mantine/core';

interface WorkExperienceProps {
	data: {
		role: string
		company: string
		startPeriod: string
		endPeriod: string
		location: string
	}[]
}

const WorkExperienceSection = ({data}: WorkExperienceProps) => {
	return (
		<Container>
			<Box>
				<Title>My experience</Title>
			</Box>
			{data.map(d =>
				<Card withBorder mb="lg">
					<Grid>
						<Grid.Col span={3}>
							<Text>{d.startPeriod} - {d.endPeriod}</Text>
						</Grid.Col>
						<Grid.Col span={6}>
							<Title>{d.role}</Title>
							<Text>{d.company}</Text>
							<Text>{d.location}</Text>
						</Grid.Col>
					</Grid>
				</Card>
			)}
		</Container>
	);
};

export default WorkExperienceSection;
