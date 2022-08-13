import React from 'react';
import {Card, Text, Box, Title} from "@mantine/core";
import {School} from "tabler-icons-react";

const Education = () => {
	return (
		<div>
			<Box>
				<Title align="left">Education</Title>
			</Box>
			<Card p="md" withBorder>
				<Text weight={500} mb="sm">Bachelor of Science in Software Engineering</Text>
				<Text>Kisii University</Text>
				<Text>2014 - 2018</Text>
			</Card>
		</div>
	);
};

export default Education;
