import React from 'react'
import {Box, Card, Container, createStyles, Group, SimpleGrid, Text, Title, Image} from '@mantine/core'

const useStyles = createStyles((theme) => ({
	inner: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: theme.spacing.xl * 4,
		paddingBottom: theme.spacing.xl * 4,
	},
	content: {
		textAlign: "center"
	}
}))

interface ServicesProps {
	data: {
		imageUrl: string
		title: string
		description: string
	}[]
}

const ServicesSection = ({data}: ServicesProps) => {
	const {classes} = useStyles()
	return (
		<Container py="lg">
			<Box mb="xl">
				<Title mb="lg">Services I Offer</Title>
				<Text mb="lg">I help ambitious business like yours generate more profit by building awareness, driving web
					traffic, connecting with customers and growing overall sales.</Text>
			</Box>
			<SimpleGrid
				cols={3}
				py="lg"
				spacing="lg"
				breakpoints={[
					{ maxWidth: 'md', cols: 3, spacing: 'md' },
					{ maxWidth: 'sm', cols: 2, spacing: 'sm' },
					{ maxWidth: 'xs', cols: 1, spacing: 'sm' },
				]}
			>
				{data.map(d =>
					<Card className={classes.content} p="md" withBorder key={d.title}>
						<Image
							fit="contain"
							src={d.imageUrl}
							mx="auto"
							width={48}
						/>
						<Text weight={500} size="lg" mt="lg" mb="sm">{d.title}</Text>
					</Card>
				)}
			</SimpleGrid>
		</Container>
	)
}

export default ServicesSection
