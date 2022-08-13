import React, {useState} from 'react';
import {
	createStyles,
	Menu,
	Center,
	Header,
	Container,
	Group,
	Button,
	Burger, ActionIcon, Tooltip, Title,
} from '@mantine/core';
import {BrandGithub, ChevronDown, Icons, ThreeDCubeSphere} from 'tabler-icons-react';
import {socialLinks} from "../../data/socialLinks";
import {iconResolver} from '../../utils';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
	header: {
		position: "sticky",
		borderBottom: "1px solid",
		backgroundColor: theme.fn.variant({variant: 'filled', color: theme.primaryColor}).background,
		color: "white"
	},
	inner: {
		height: HEADER_HEIGHT,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	brand: {
		fontWeight: "bold",
		textDecoration: "none",
		color: theme.white,
		fontSize: 18
	},
	links: {
		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},

	burger: {
		[theme.fn.largerThan('sm')]: {
			display: 'none',
		},
	},

	link: {
		display: 'block',
		lineHeight: 1,
		padding: '8px 12px',
		borderRadius: theme.radius.sm,
		textDecoration: 'none',
		color: theme.white,
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,
		textTransform: 'capitalize',

		'&:hover': {
			backgroundColor: theme.fn.lighten(
				theme.fn.variant({variant: 'filled', color: theme.primaryColor}).background,
				0.2
			),
		},
	},

	linkLabel: {
		marginRight: 5,
	},
}));

interface AppNavProps {
	links: {
		link: string
		label: string
		links?: { link: string; label: string }[]
		type?: number
	}[];
}

const AppNav = ({links}: AppNavProps) => {
	const {classes} = useStyles();
	const [opened, setOpened] = useState(false);
	const items = links.map((link) => {
		const menuItems = link.links?.map((item) => (
			<Menu.Item key={item.link}>{item.label}</Menu.Item>
		));

		if (menuItems) {
			return (
				<Menu
					key={link.label}
					trigger="hover"
					transitionDuration={0}
				>
					<Menu.Target>
						<a
							href={link.link}
							className={classes.link}
							onClick={(event) => event.preventDefault()}
						>
							<Center>
								<span className={classes.linkLabel}>{link.label}</span>
								<ChevronDown size={12}/>
							</Center>
						</a>
					</Menu.Target>
				</Menu>
			);
		}

		return (
			<Button
				component='a'
				key={link.label}
				href={link.link}
				className={classes.link}
				variant="subtle"
			>
				{link.label}
			</Button>
		);
	});

	const handleOpen = () => {
		setOpened(!opened)
	}

	return (
		<Header height={HEADER_HEIGHT} sx={{borderBottom: 0}} mb={120} className={classes.header}>
			<Container className={classes.inner}>
				<a href="/" className={classes.brand}>Kelvin Kiptum</a>
				<Group>
					<Burger
						opened={opened}
						onClick={handleOpen}
						className={classes.burger}
						size="sm"
					/>
					<Group spacing={5} className={classes.links}>
						{items}
					</Group>
				</Group>
				<Button
					leftIcon={<BrandGithub/>}
					component="a"
					href="https://github.com/kelvink96"
					target="_blank"
				>
					Github
				</Button>
			</Container>
		</Header>
	);
}

export default AppNav
