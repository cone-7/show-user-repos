import React, { Component } from 'react';
import UserInfo from "./userInfo.jsx";
import UserReposInfo from "./userReposInfo.jsx";
import ButtonComponent from "./button.jsx";
import "./styles/main.css"
import {infoUserService, issuesFromRepoService} from "../services/services.js"

export default class MainComponent extends React.Component {

	constructor(props) {
	    super(props);
		this.state = {
	    	userGithub: '',
			userInfoRepos: {}
	    }
		this.createObjectsInfoUser = this.createObjectsInfoUser.bind(this);
		this.getIssuesFromRepo = this.getIssuesFromRepo.bind(this);
		this.addIssuesToRepos = this.addIssuesToRepos.bind(this);
 	}

	createObjectsInfoUser(){
		infoUserService(this.state.userGithub).then((data) => {
			this.addIssuesToRepos(data).then( r => {
					this.setState({userInfoRepos: data})
				}
			);
		});
	}

	async addIssuesToRepos(userInfo){
		let reposWithIssues = userInfo.map(async (repo) => {
				let repoWithIssues = await this.getIssuesFromRepo(repo.name)
				repo.hasReportedIssues = false;
				if(repoWithIssues.length > 0){
					repo.hasReportedIssues = true;
					repo.issuesReported = repoWithIssues;
				}
				return repo;
			})
		return Promise.all(reposWithIssues);
	}

	getIssuesFromRepo(userRepo, callback){
		return issuesFromRepoService(this.state.userGithub, userRepo).then((data) => {
			 return data;
		});
	}

	handleChange(event) {
		let info = this.state.userGithub;
    	info = event.target.value;
    	this.setState({ userGithub: info });
    }

	render() { 
		return (
			<div> 
				<div className="header"> 
					User Github:<input id='name' onChange={this.handleChange.bind(this)} 
						value={this.state.userGithub} type="text"></input>
					<ButtonComponent onClick={this.createObjectsInfoUser}>Enviar</ButtonComponent>
					<UserInfo user={this.state.userGithub}/>
				</div>
				<UserReposInfo repos={this.state.userInfoRepos} />
			</div> 
		) 
	} 
}