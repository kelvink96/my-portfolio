import React from 'react';
import {
	ActionIcon,
	Badge,
	Box,
	Card,
	Container, createStyles,
	Group,
	SimpleGrid,
	Text,
	Title,
	Tooltip,
	useMantineTheme
} from "@mantine/core";
import {BrandGithub, PlayerPlay} from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
	projectCard: {
		textAlign: 'left'
	},
	footer: {
		padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
		marginTop: theme.spacing.md,
	},
}))

interface ProjectsProps {
	data: {
		title: string
		alias: string
		description: string
		tags: string[]
		gitUrl: string
		liveUrl: string
	}[]
}

const FeaturedProjects = ({data}: ProjectsProps) => {
	const {classes} = useStyles()
	const theme = useMantineTheme()
	const items = data.map(d =>
		<Card className={classes.projectCard} p="md" withBorder>
			<Text weight={500} mb="md">{d.title}</Text>
			<Text size="sm" mb="md">{d.description}</Text>
			<Group spacing="xs">{d.tags.map(tag => <Badge>{tag}</Badge>)}</Group>
			<Card.Section className={classes.footer}>
				<Group position="apart">
					<Text size="xs" color="dimmed">
						{d.alias}
					</Text>
					<Group spacing="xs">
						<Tooltip label='github link'>
							<ActionIcon component="a" href={d.gitUrl} target="_blank">
								<BrandGithub size={18}/>
							</ActionIcon>
						</Tooltip>
						<Tooltip label='live preview link'>
							<ActionIcon component="a" href={d.liveUrl} target="_blank">
								<PlayerPlay size={18}/>
							</ActionIcon>
						</Tooltip>
					</Group>
				</Group>
			</Card.Section>
		</Card>
	)

	return (
		<Container>
			<Box>
				<Title>Featured projects</Title>
			</Box>
			<SimpleGrid cols={2}>
				{items}
			</SimpleGrid>
		</Container>
	)
};

export default FeaturedProjects;
