import React, {useState} from 'react';
import {
	createStyles,
	Menu,
	Center,
	Header,
	Container,
	Group,
	Button,
	Burger, ActionIcon, Tooltip,
} from '@mantine/core';
import {ChevronDown, Icons, ThreeDCubeSphere} from 'tabler-icons-react';
import {socialLinks} from "../../data/socialLinks";
import {iconResolver} from '../../utils';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
	inner: {
		height: HEADER_HEIGHT,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
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
		color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,
		textTransform: 'capitalize',

		'&:hover': {
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
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
		<Header height={HEADER_HEIGHT} sx={{borderBottom: 0}} mb={120}>
			<Container className={classes.inner}>
				<ThreeDCubeSphere/>
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
			</Container>
		</Header>
	);
}

export default AppNav