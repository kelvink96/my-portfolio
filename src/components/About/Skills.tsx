import React, {useState} from 'react';
import {
	Anchor,
	Badge,
	Box,
	Button,
	Card,
	Container,
	createStyles,
	Drawer,
	Group,
	Modal,
	SimpleGrid, Spoiler, Stack,
	Text,
	Title, useMantineTheme
} from "@mantine/core";
import {ChevronDown, ExternalLink} from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
	simpleCard: {
		textAlign: 'left'
	},
	links: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	}
}))

interface SkillsProps {
	data: {
		title: string
		description: string
		links: string[]
		tags: { title: string, link: string }[]
	}[]
}

const Skills = ({data}: SkillsProps) => {
	const {classes} = useStyles()
	const theme = useMantineTheme()

	const items = data.map(d =>
		<Card className={classes.simpleCard} p="md" withBorder>
			<Text weight={500} mb="md">{d.title}</Text>
			<Group>
				{d.tags.map(tag => <Badge>{tag.title}</Badge>)}
			</Group>
		</Card>
	)

	return (
		<Box py="xl">
			<Title mb="lg">Skills</Title>
			<SimpleGrid cols={3}>
				{items}
			</SimpleGrid>
		</Box>
	);
};

export default Skills;
