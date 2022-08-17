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
			<Title align="left" mb="lg">Bio</Title>
			<Card
				className={classes.content}
				p="md"
				radius="xs"
				shadow="md"
				withBorder
			>
				<Text mb="sm">
					Hi, I'm Kelvin a software engineering graduate with a passion for transforming ideas into simple applications.
					I love experimenting with new technologies.
				</Text>
				<Text mb="sm">
					Right now, I'm working on building and shipping business
					automation solutions at Alternate Limited.
				</Text>
				<Text mb="sm">
					I am a part-time video editor at Tambua Women in Tech.
				</Text>
				<Text mb="sm">Besides coding,</Text>
				<List>
					<List.Item>I do design work majorly graphics and UI/UX designing.</List.Item>
					<List.Item>I do photo, video and, audio editing.</List.Item>
					<List.Item>I am an otaku (anime fan), a huge follower of One Piece 😊.</List.Item>
					<List.Item>I love soccer, an Arsenal FC fan #COYG</List.Item>
				</List>
			</Card>
		</div>
	);
};

export default Bio;
