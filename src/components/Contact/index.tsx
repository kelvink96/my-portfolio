import React from 'react'
import {
	createStyles,
	TextInput,
	Textarea,
	Group,
	Button,
	Container,
	Box,
	Text,
	Title,
	SimpleGrid,
	Stack,
	ThemeIcon
} from '@mantine/core';
import {At, Icon, MapPin, Phone, Send, Sun} from 'tabler-icons-react'

const useStyles = createStyles((theme) => ({
	form: {
		backgroundColor: theme.white,
		padding: theme.spacing.lg,
		textAlign: 'left',

		[theme.fn.smallerThan('sm')]: {
			paddingLeft: 0,
			paddingRight: 0
		}
	},

	social: {
		color: theme.white,

		'&:hover': {
			color: theme.colors[theme.primaryColor][1],
		},
	},

	input: {
		backgroundColor: theme.white,
		borderColor: theme.colors.gray[4],
		color: theme.black,

		'&::placeholder': {
			color: theme.colors.gray[5],
		},
	},

	inputLabel: {
		color: theme.black,
	},

	control: {
		backgroundColor: theme.colors[theme.primaryColor][6],
	},
	icon: {
		marginRight: theme.spacing.md,
		backgroundImage: 'none',
		backgroundColor: 'transparent',
	},
}));

const MOCKDATA = [
	{title: 'Email', description: 'kelvin.kiprop96@gmail.com', icon: At},
	{title: 'Phone', description: '+254 (706) 094 44 33', icon: Phone},
	{title: 'Address', description: 'Nairobi, Kenya', icon: MapPin},
	{title: 'Working hours', description: 'Mon - Fri : 8 a.m. – 11 p.m.', icon: Sun},
];

const ContactSection = () => {
	const {classes, cx} = useStyles();

	const items = MOCKDATA.map((d: {
		icon: Icon,
		title: string,
		description: string,
	}) =>
		<div key={d.title}>
			<div>
				<Text size="sm" align="left">{d.title}</Text>
				<Text align="left">{d.description}</Text>
			</div>
		</div>)

	return (
		<Container>
			<SimpleGrid
				cols={2}
				breakpoints={[
					{maxWidth: 'md', cols: 3, spacing: 'md'},
					{maxWidth: 'sm', cols: 2, spacing: 'sm'},
					{maxWidth: 'xs', cols: 1, spacing: 'sm'},
				]}
			>
				<Box>
					<Title align="left">Contact</Title>
					<Text mt="sm" mb={30} align="left">
						I am available for freelance work. However, if you have other request or question,
						don’t hesitate to contact me.
					</Text>
					<Stack>
						{items}
					</Stack>
				</Box>
				<div className={classes.form}>
					<TextInput
						label="Your name"
						placeholder="Your name"
					/>
					<TextInput
						mt="lg"
						label="Your email"
						placeholder="hello@gmail.com"
						required
					/>
					<TextInput
						mt="lg"
						label="Subject"
						placeholder="Subject"
						required
					/>
					<Textarea
						mt="lg"
						label="Your message"
						placeholder="Please include all relevant information"
						minRows={3}
					/>
					<Group position="right" mt="md">
						<Button
							type="submit"
							className={classes.control}
							leftIcon={<Send size={18}/>}
							fullWidth
						>
							Send message
						</Button>
					</Group>
				</div>
			</SimpleGrid>
		</Container>
	)
}

export default ContactSection
