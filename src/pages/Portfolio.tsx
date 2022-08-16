import React, {useState, useEffect} from 'react';
import Wrapper from "./Wrapper";
import {FeaturedProjectsSection} from "../components/Portfolio";
import {ProjectsData} from '../data/projectsData';
import {Helmet} from "react-helmet";
import {Button, Center, createStyles} from '@mantine/core';
import {ExternalLink} from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
	section: {
		paddingTop: theme.spacing.xl * 2,
		paddingBottom: theme.spacing.xl * 2,

		[theme.fn.smallerThan('sm')]: {
			paddingTop: theme.spacing.lg,
			paddingBottom: theme.spacing.lg,
		}
	},
}));

const Portfolio = () => {
	const {classes} = useStyles()
	const [gitHubProfile, setGitHubProfile] = useState()
	const [githubRepos, setgithubRepos] = useState()

	const fetchGitData = () => {
		fetch(
			'https://api.github.com/users/kelvink96',
			{method: 'GET', redirect: 'follow'})
			.then(response => response.json())
			.then(result => setGitHubProfile(result))
			.catch(err => console.log(err))
	}

	const fetchGitRepos = () => {
		fetch(
			'https://api.github.com/users/kelvink96/repos',
			{method: 'GET', redirect: 'follow'})
			.then(response => response.json())
			.then(result => setgithubRepos(result))
	}

	return (
		<Wrapper>
			<Helmet>
				<title>Portfolio | Kelvin Kiptum</title>
			</Helmet>
			<div className={classes.section}>
				<FeaturedProjectsSection data={ProjectsData.data}/>
				<Center mt="xl">
					<Button
						mt="xl"
						component="a"
						href="https://github.com/kelvink96?tab=repositories"
						target="_blank"
						rightIcon={<ExternalLink size={18}/>}
						variant="outline"
						radius="xs"
						size="md"
					>
						View more projects
					</Button>
				</Center>
			</div>
		</Wrapper>
	);
};

export default Portfolio;
