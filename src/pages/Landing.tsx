import React, {useState, useEffect} from 'react';
import AppNav from "../components/AppNav";
import {headerLinks} from "../data/headerLinks";
import HeroSection from "../components/Hero";
import AboutMeSection from '../components/AboutMe';
import SkillsSection from '../components/Skills';
import {SkillsData} from '../data/skillsData';
import ProjectsSection from '../components/Projects';
import {ProjectsData} from '../data/projectsData';
import {WorkExperienceData} from '../data/workExperienceData';
import ContactSection from '../components/Contact';
import {FooterSection} from '../components/Footer';
import ServicesSection from '../components/Services';
import {ServicesData} from '../data/servicesData';
import WorkExperienceSection from '../components/WorkExperience';
import {Container} from "@mantine/core";

const Landing = () => {
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
		<div>
			<AppNav links={headerLinks.links}/>
			<HeroSection/>
			<FooterSection/>
		</div>
	);
};

export default Landing;
