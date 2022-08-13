import React, {useState, useEffect} from 'react';
import Wrapper from "./Wrapper";

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
		</Wrapper>
	);
};

export default Portfolio;
