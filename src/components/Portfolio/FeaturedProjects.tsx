import React from 'react';
import {
	ActionIcon,
	Badge,
	Box,
	Button,
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
	const items = data.map(d =>
		<Card
			key={d.title}
			className={classes.projectCard}
			p="md"
			shadow="md"
			withBorder
			radius="xs"
		>
			<Text weight={600} mb="sm">{d.title}</Text>
			<Text size="sm" mb="sm">{d.description}</Text>
			<Group spacing="sm" mb="sm">
				{d.tags.map(tag => <Badge key={`${d.title}-${tag}`} variant="dot">{tag}</Badge>)}</Group>
			<Card.Section className={classes.footer}>
				<Group position="apart">
					<Text size="xs" color="dimmed">
						{d.alias}
					</Text>
					<Group spacing="xs">
						<Tooltip label='github link'>
							<Button
								component="a"
								href={d.gitUrl}
								target="_blank"
								leftIcon={<BrandGithub size={18}/>}
								variant="white"
								compact
								radius="xs"
							>
								GitHub
							</Button>
						</Tooltip>
						<Tooltip label='live preview link'>
							<Button
								component="a"
								href={d.liveUrl}
								target="_blank"
								leftIcon={<PlayerPlay size={18}/>}
								variant="white"
								compact
								radius="xs"
							>
								Demo
							</Button>
						</Tooltip>
					</Group>
				</Group>
			</Card.Section>
		</Card>
	)

	return (
		<Container>
			<Box mb="xl">
				<Title>Featured projects</Title>
			</Box>
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
		</Container>
	)
};

export default FeaturedProjects;
