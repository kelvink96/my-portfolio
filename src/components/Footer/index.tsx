import {createStyles, Anchor, Group, ActionIcon, Text, Tooltip} from '@mantine/core';
import {socialLinks} from '../../data/socialLinks';
import {iconResolver} from '../../utils';

const useStyles = createStyles((theme) => ({
	footer: {
		marginTop: 120,
		borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
		}`,
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
}));

interface FooterProps {
	links: { link: string; label: string }[];
}

export function FooterSection() {
	const {classes} = useStyles();

	return (
		<div className={classes.footer}>
			<div className={classes.inner}>
				<Text weight={500}>Kelvin Kiptum</Text>
				<Text size="sm">Copyright © {new Date().getFullYear().toString()}. All Rights Reserved.</Text>
				<Group spacing="xs" position="right" noWrap>
					{socialLinks.links.map(link => link.type == 0 &&
						<Tooltip label={link.label}>
							<ActionIcon size="lg" radius="xs" title={link.label}
													variant="default">{iconResolver(link.icon)}</ActionIcon>
						</Tooltip>
					)}
				</Group>
			</div>
		</div>
	);
}
