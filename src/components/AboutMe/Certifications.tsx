import React from 'react';
import {
	Card,
	createStyles,
	List,
	ListItem,
	SimpleGrid,
	ThemeIcon,
	Text,
	useMantineTheme,
	Paper,
	Spoiler
} from "@mantine/core";
import {BuildingCommunity, CalendarEvent, Certificate2, CircleCheck, CircleDashed} from "tabler-icons-react";

const {Item} = List

const useStyles = createStyles((theme) => ({
	content: {
		textAlign: 'left'
	},
	item: {}
}))

interface CertificationsProps {
	data: {
		title: string
		institution: string
		issuedOn: string
		link: string
	}[]
}

const Certifications = ({data}: CertificationsProps) => {
	const {classes} = useStyles()

	const items = data.map(d =>
		<Card className={classes.content} mb="md">
			<ThemeIcon variant="light" size={40} mb="sm">
				<Certificate2 style={{width: 20, height: 20}}/>
			</ThemeIcon>
			<Text weight={500}>{d.title}</Text>
			<Text size="sm">{d.institution}</Text>
			<Text size="sm">Issued {d.issuedOn}</Text>
		</Card>
	)

	return (
		<Spoiler maxHeight={300} showLabel="Show more" hideLabel="Hide">
			<SimpleGrid cols={4}>
				{items}
			</SimpleGrid>
		</Spoiler>
	);
};

export default Certifications;
