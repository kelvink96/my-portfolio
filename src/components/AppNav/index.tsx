import React, {useState} from 'react';
import {
	createStyles,
	Menu,
	Center,
	Header,
	Container,
	Group,
	Button,
	Burger, ActionIcon, Tooltip, Title, Drawer, Stack, useMantineTheme,
} from '@mantine/core';
import {BrandGithub, ChevronDown, Icons, ThreeDCubeSphere} from 'tabler-icons-react';
import {socialLinks} from "../../data/socialLinks";
import {iconResolver} from '../../utils';
import {startNavigationProgress} from "@mantine/nprogress";
import {useLocation} from "react-router-dom";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
	header: {
		position: "sticky",
		borderBottom: "1px solid",
		backgroundColor: theme.fn.variant({variant: 'filled', color: theme.primaryColor}).background,
		color: "white",
		marginBottom: 120,

		[theme.fn.smallerThan('sm')]: {
			marginBottom: 30
		}
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
		[theme.fn.smallerThan('sm')]: {
			border: "1px solid",
			borderColor: theme.fn.lighten(
				theme.fn.variant({variant: 'filled', color: theme.primaryColor}).background,
				0.4
			),
		},
	},

	linkLabel: {
		marginRight: 5,
	},

	linkActive: {
		display: 'block',
		lineHeight: 1,
		padding: '8px 12px',
		borderRadius: theme.radius.sm,
		textDecoration: 'none',
		color: theme.white,
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,
		textTransform: 'capitalize',
		backgroundColor: theme.fn.lighten(
			theme.fn.variant({variant: 'filled', color: theme.primaryColor}).background,
			0.4
		),

		'&:hover': {
			backgroundColor: theme.fn.lighten(
				theme.fn.variant({variant: 'filled', color: theme.primaryColor}).background,
				0.4
			),
		}
	},

	socialLink: {
		color: 'white',

		'&:hover': {
			backgroundColor: theme.fn.lighten(
				theme.fn.variant({variant: 'filled', color: theme.primaryColor}).background,
				0.2
			),
		},
	},

	sideMenu: {
		backgroundColor: theme.fn.variant({variant: 'filled', color: theme.primaryColor}).background,
		color: theme.white
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
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);
	const location = useLocation()

	const urlResolver = (href: string) => {
		return location.pathname === href
	}

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
				variant="subtle"
				className={urlResolver(link.link) ? classes.linkActive : classes.link}
			>
				{link.label}
			</Button>
		);
	});

	const handleOpen = () => {
		setOpened(!opened)
	}

	const handlePageLoad = () => {
		startNavigationProgress()
	}

	return (
		<Header height={HEADER_HEIGHT} sx={{borderBottom: 0}} className={classes.header}>
			<Container className={classes.inner}>
				<Burger
					opened={opened}
					onClick={handleOpen}
					className={classes.burger}
					size="sm"
					color="#fff"
				/>
				<a href="/" className={classes.brand}>Kelvin Kiptum</a>
				<Group>
					<Group spacing={5} className={classes.links}>
						{items}
					</Group>
				</Group>
				<Group spacing={5}>
					{socialLinks.links.map(link => link.type === 1 &&
						<Tooltip
							label={link.label}
							key={`nav-${link.label}`}
						>
							<ActionIcon
								component="a"
								href={link.link}
								target="_blank"
								size="lg"
								radius="xs"
								title={link.label}
								className={classes.socialLink}
							>
								{iconResolver(link.icon)}
							</ActionIcon>
						</Tooltip>
					)}
				</Group>
				<Drawer
					opened={opened}
					onClose={() => setOpened(false)}
					title="Menu"
					padding="md"
					size="xl"
					className={classes.sideMenu}
					transitionDuration={250}
					transitionTimingFunction="ease"
				>
					<Stack>
						{items}
					</Stack>
				</Drawer>
			</Container>
		</Header>
	);
}

export default AppNav
