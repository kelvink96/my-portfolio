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
		<Container>
			<Box>
				<Title>services i offer</Title>
				<Text>i help ambitious business like yours generate more profit by building awareness, driving web traffic,
					connecting with customers and growing overall sales.</Text>
			</Box>
			<SimpleGrid cols={3}>
				{data.map(d =>
					<Card>
						<Image
							width={48}
							height={48}
							fit="contain"
							src={d.imageUrl}
						/>
						<Title>{d.title}</Title>
						<Text>{d.description}</Text>
					</Card>
				)}
			</SimpleGrid>
		</Container>
	)
}

export default ServicesSection
