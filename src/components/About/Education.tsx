import React from 'react';
import {Card, Text, Box, Title, createStyles} from "@mantine/core";

const useStyles = createStyles(() => ({
	content: {
		textAlign: "left"
	},
	title: {
		textAlign: "left"
	}
}))

const Education = () => {
	const {classes} = useStyles()
	return (
		<div>
			<Title align="left" mb="lg">Education</Title>
			<Card
				p="md"
				className={classes.content}
				mb="md"
				shadow="md"
				withBorder
				radius="xs"
			>
				<Text weight={600} mb="sm">Bachelor of Science in Software Engineering</Text>
				<Text>Kisii University</Text>
				<Text>2014 - 2018</Text>
			</Card>
		</div>
	);
};

export default Education;
