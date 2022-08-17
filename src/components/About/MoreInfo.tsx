import React from 'react';
import {Box, Card, createStyles, List, SimpleGrid, Title} from "@mantine/core";

const useStyles = createStyles(() => ({
	content: {
		textAlign: "left"
	},
	title: {
		textAlign: "left"
	}
}))

const MoreInfo = () => {
	const {classes} = useStyles()

	return (
		<div>
			<Box>
				<Title mb="lg" className={classes.title}>Hobbies</Title>
				<Card
					p="md"
					className={classes.content}
					shadow="md"
					withBorder
					radius="xs"
				>
					<List size="md">
						<List.Item>Gaming</List.Item>
						<List.Item>Hiking</List.Item>
						<List.Item>Listening to music</List.Item>
						<List.Item>Watching movies</List.Item>
					</List>
				</Card>
			</Box>
		</div>
	);
};

export default MoreInfo;
