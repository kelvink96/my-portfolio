import React from 'react';
import {
	createStyles,
	Image,
	Container,
	Title,
	Button,
	Group,
	Text,
	List,
	ThemeIcon,
	ActionIcon,
	Tooltip,
} from '@mantine/core';
import { Check } from 'tabler-icons-react';
import image from './image.svg';
import { socialLinks } from '../../data/socialLinks';
import { iconResolver } from '../../utils';

const useStyles = createStyles((theme) => ({
	inner: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingTop: theme.spacing.xl * 4,
		paddingBottom: theme.spacing.xl * 4,
	},

	content: {
		maxWidth: 480,
		marginRight: theme.spacing.xl * 3,

		[theme.fn.smallerThan('md')]: {
			maxWidth: '100%',
			marginRight: 0,
		},
	},

	title: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: 44,
		lineHeight: 1.2,
		fontWeight: 900,

		[theme.fn.smallerThan('xs')]: {
			fontSize: 28,
		},
	},

	control: {
		[theme.fn.smallerThan('xs')]: {
			flex: 1,
		},
	},

	image: {
		flex: 1,

		[theme.fn.smallerThan('md')]: {
			display: 'none',
		},
	},

	highlight: {
		position: 'relative',
		backgroundColor:
			theme.colorScheme === 'dark'
				? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
				: theme.colors[theme.primaryColor][0],
		borderRadius: theme.radius.sm,
		padding: '4px 12px',
	},
}));

export default function HeroSection() {
	const { classes } = useStyles();
	return (
		<div>
			<Container>
				<div className={classes.inner}>
					<div className={classes.content}>
						<Title className={classes.title}>
							Hello,
						</Title>
						<Title>
							I'm Kelvin, a
						</Title>
						<Title>
							UI/UX, Graphic Designer & Software Developer
						</Title>
						<Text>I love experimenting with new technologies.</Text>
						<Button>Let's get in touch</Button>
						<Group>
							<Text>Check out my</Text>
							<Group>{socialLinks.links.map(link => link.type == 1 &&
								<Tooltip label={link.label}>
									<ActionIcon size="lg" radius="xs" title={link.label}>{iconResolver(link.icon)}</ActionIcon>
								</Tooltip>
							)}
							</Group>
						</Group>
					</div>
					<Image
						src="https://scontent.fnuu2-1.fna.fbcdn.net/v/t1.6435-9/123549112_3390195514433537_1119106520716065407_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=84a396&_nc_ohc=LTwLUhufTp8AX8miS2f&_nc_ht=scontent.fnuu2-1.fna&oh=00_AT9Qpyw1lvnR-FvURGYNuJvOZBjzCP01EoW0cOZMeDTYVQ&oe=62FDFEA6"
						className={classes.image} />
				</div>
			</Container>
		</div>
	);
}
