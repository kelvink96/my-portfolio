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
			<SimpleGrid cols={1}>
				<Box>
					<Title mb="lg" order={3} className={classes.title}>Hobbies</Title>
					<Card withBorder p="md" className={classes.content}>
						<List type="ordered" size="md">
							<List.Item>Gaming</List.Item>
							<List.Item>Hiking</List.Item>
							<List.Item>Listening to music</List.Item>
							<List.Item>Watching movies</List.Item>
						</List>
					</Card>
				</Box>
			</SimpleGrid>
		</div>
	);
};

export default MoreInfo;
