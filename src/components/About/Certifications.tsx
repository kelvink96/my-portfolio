import React, {useState} from 'react';
import {
	Card,
	createStyles,
	List,
	SimpleGrid,
	ThemeIcon,
	Text,
	Spoiler, Title, Box, Container, UnstyledButton, Group, Center, ScrollArea, TextInput, Table, Button
} from "@mantine/core";
import {
	BuildingCommunity,
	CalendarEvent,
	Certificate2,
	ChevronDown,
	ChevronUp,
	CircleCheck,
	CircleDashed, ExternalLink,
	Search,
	Selector
} from "tabler-icons-react";
import {keys} from '@mantine/utils';

const {Item} = List

const useStyles = createStyles((theme) => ({
	th: {
		padding: '0 !important',
	},
	tr: {
		textAlign: 'left'
	},
	control: {
		width: '100%',
		padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,

		'&:hover': {
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
		},
	},

	icon: {
		width: 21,
		height: 21,
		borderRadius: 21,
	},
}));

interface RowData {
	title: string
	institution: string
	issuedOn: string
	link: string
}

interface TableSortProps {
	data: RowData[];
}

interface ThProps {
	children: React.ReactNode;
	reversed: boolean;
	sorted: boolean;

	onSort(): void;
}

const Th = ({children, reversed, sorted, onSort}: ThProps) => {
	const {classes} = useStyles();
	const Icon = sorted ? (reversed ? ChevronUp : ChevronDown) : Selector;
	return (
		<th className={classes.th}>
			<UnstyledButton onClick={onSort} className={classes.control}>
				<Group position="apart">
					<Text weight={500} size="sm">
						{children}
					</Text>
					<Center className={classes.icon}>
						<Icon size={14}/>
					</Center>
				</Group>
			</UnstyledButton>
		</th>
	);
}

const filterData = (data: RowData[], search: string) => {
	const query = search.toLowerCase().trim();
	return data.filter((item) =>
		keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
	);
}

const sortData = (data: RowData[], payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }) => {
	const {sortBy} = payload;

	if (!sortBy) {
		return filterData(data, payload.search);
	}

	return filterData(
		[...data].sort((a, b) => {
			if (payload.reversed) {
				return b[sortBy].localeCompare(a[sortBy]);
			}

			return a[sortBy].localeCompare(b[sortBy]);
		}),
		payload.search
	);
}

const Certifications = ({data}: TableSortProps) => {
	const [search, setSearch] = useState('');
	const [sortedData, setSortedData] = useState(data);
	const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
	const [reverseSortDirection, setReverseSortDirection] = useState(false);
	const {classes} = useStyles();

	const setSorting = (field: keyof RowData) => {
		const reversed = field === sortBy ? !reverseSortDirection : false;
		setReverseSortDirection(reversed);
		setSortBy(field);
		setSortedData(sortData(data, {sortBy: field, reversed, search}));
	};

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value} = event.currentTarget;
		setSearch(value);
		setSortedData(sortData(data, {sortBy, reversed: reverseSortDirection, search: value}));
	};

	const rows = sortedData.map((row) => (
		<tr className={classes.tr} key={row.title}>
			<td>{row.title}</td>
			<td>{row.issuedOn}</td>
			<td>{row.institution}</td>
			<td>
				<Button
					component="a"
					href={row.link}
					target="_blank"
					rightIcon={<ExternalLink size={14}/>}
					variant="subtle"
				>
					show credential
				</Button>
			</td>
		</tr>
	));

	return (
		<Box py="xl">
			<Title mb="lg">Certifications</Title>
			<ScrollArea>
				<TextInput
					placeholder="Search by any field"
					mb="md"
					icon={<Search size={14}/>}
					value={search}
					onChange={handleSearchChange}
				/>
				<Table
					horizontalSpacing="md"
					verticalSpacing="xs"
					sx={{tableLayout: 'fixed', minWidth: 700}}
				>
					<caption className={classes.tr}>{data.length} certifications</caption>
					<thead>
					<tr>
						<Th
							sorted={sortBy === 'title'}
							reversed={reverseSortDirection}
							onSort={() => setSorting('title')}
						>
							Title
						</Th>
						<Th
							sorted={sortBy === 'issuedOn'}
							reversed={reverseSortDirection}
							onSort={() => setSorting('issuedOn')}
						>
							Issued On
						</Th>
						<Th
							sorted={sortBy === 'institution'}
							reversed={reverseSortDirection}
							onSort={() => setSorting('institution')}
						>
							Institution
						</Th>
						<Th
							sorted={sortBy === 'institution'}
							reversed={reverseSortDirection}
							onSort={() => setSorting('institution')}
						>
							Link
						</Th>
					</tr>
					</thead>
					<tbody>
					{rows.length > 0 ? (
						rows
					) : (
						<tr>
							<td colSpan={Object.keys(data[0]).length}>
								<Text weight={500} align="center">
									Nothing found
								</Text>
							</td>
						</tr>
					)}
					</tbody>
					<tfoot>
					<tr>
						<th>Title</th>
						<th>Issued on</th>
						<th>Institution</th>
						<th>Link</th>
					</tr>
					</tfoot>
				</Table>
			</ScrollArea>
		</Box>
	)
};

export default Certifications;
