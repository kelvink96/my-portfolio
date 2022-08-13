import {Card, createStyles, List, Text, Title} from '@mantine/core';
import React from 'react';
import {UserCircle} from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
	content: {
		textAlign: "left"
	}
}))

const Bio = () => {
	const {classes} = useStyles()
	return (
		<div>
			<Title align="left" mb="lg" order={3}>Bio</Title>
			<Card className={classes.content} p="md" withBorder>
				<Text mb="md">
					Hey! I'm Kelvin, a software engineer based in Nairobi, Kenya. love experimenting with new technologies.
				</Text>
				<Text mb="md">
					I am a Website and App Developer, and Graphics Designer based in Nairobi, Kenya. I enjoy designing mock-ups of
					programs in platforms such as mobile, desktop and web and also implementing them on the respective platforms.
				</Text>
				<Text mb="sm">Besides coding,</Text>
				<List>
					<List.Item>I do design work majorly graphics and UI/UX designing.</List.Item>
					<List.Item>I do photo, video and, audio editing.</List.Item>
					<List.Item>I am an otaku (anime fan), a huge follower of One Piece 😊.</List.Item>
					<List.Item>I love soccer. An Arsenal FC fan #COYG</List.Item>
				</List>
			</Card>
		</div>
	);
};

export default Bio;
