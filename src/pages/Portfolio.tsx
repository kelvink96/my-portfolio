import React, {useState, useEffect} from 'react';
import Wrapper from "./Wrapper";
import {FeaturedProjectsSection} from "../components/Portfolio";
import {ProjectsData} from '../data/projectsData';
import {Helmet} from "react-helmet";
import {Button} from '@mantine/core';
import {ExternalLink} from 'tabler-icons-react';

const Portfolio = () => {
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

	useEffect(() => {
		fetchGitData()
		fetchGitRepos()
	}, [])

	return (
		<Wrapper>
			<Helmet>
				<title>Portfolio | Kelvin Kiptum</title>
			</Helmet>
			<FeaturedProjectsSection data={ProjectsData.data}/>
			<Button
				mt="xl"
				component="a"
				href="https://github.com/kelvink96?tab=repositories"
				target="_blank"
				rightIcon={<ExternalLink size={18}/>}
			>
				View more projects
			</Button>
		</Wrapper>
	);
};

export default Portfolio;
