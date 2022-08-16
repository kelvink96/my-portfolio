import {createStyles, Anchor, Group, ActionIcon, Text, Tooltip, Container} from '@mantine/core';
import {socialLinks} from '../../data/socialLinks';
import {iconResolver} from '../../utils';

const useStyles = createStyles((theme) => ({
	footer: {
		marginTop: 120,
		borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
		}`,
		[theme.fn.smallerThan('sm')]: {
			marginTop: 30
		}
	},

	inner: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

		[theme.fn.smallerThan('sm')]: {
			flexDirection: 'column',
		},
	},

	links: {
		[theme.fn.smallerThan('sm')]: {
			marginTop: theme.spacing.lg,
			marginBottom: theme.spacing.sm,
		},
	},

	copyrightText: {
		fontSize: theme.fontSizes.sm,

		[theme.fn.smallerThan('sm')]: {
			marginTop: theme.spacing.xs,
			marginBottom: theme.spacing.sm
		}
	}
}));

interface FooterProps {
	links: { link: string; label: string }[];
}

export function FooterSection() {
	const {classes} = useStyles();

	return (
		<div className={classes.footer}>
			<Container className={classes.inner}>
				<Text weight={500}>Kelvin Kiptum</Text>
				<Text className={classes.copyrightText}>Copyright © {new Date().getFullYear().toString()}. All Rights Reserved.</Text>
				<Group spacing="xs" position="right" noWrap>
					{socialLinks.links.map(link => link.type === 0 &&
						<Tooltip
							label={link.label}
							key={`footer-${link.label}`}
						>
							<ActionIcon
								component="a"
								href={link.link}
								target="_blank"
								size="lg"
								radius="xs"
								title={link.label}
								variant="transparent"
								color="primary"
							>
								{iconResolver(link.icon)}
							</ActionIcon>
						</Tooltip>
					)}
				</Group>
			</Container>
		</div>
	);
}
