import React, { Component } from 'react';
import UserInfo from "./userInfo.jsx";
import UserReposInfo from "./userReposInfo.jsx";
import ButtonComponent from "./button.jsx";

export default class MainComponent extends React.Component {

	constructor(props) {
	    super(props);
		this.state = {
	    	userGithub: '',
			userInfoRepos: {}
	    }
		this.getInfoUser = this.getInfoUser.bind(this);
 	}

	getInfoUser(){
		fetch('https://api.github.com/users/'+this.state.userGithub+'/repos', {
			method: 'GET'
		}).then((response) => {
			return response.json();
		}).then((data) => {
			this.setState({userInfoRepos: data})
		});
	}

	handleChange(event) {
		let info = this.state.userGithub;
    	info = event.target.value;
    	this.setState({ userGithub: info });
    }

	render() { 
		return ( 
			<div className="body"> 
				Nombre:<input id='name' onChange={this.handleChange.bind(this)} 
					value={this.state.userGithub} type="text"></input>
				<ButtonComponent onClick={this.getInfoUser}>Enviar</ButtonComponent>
				<UserInfo user={this.state.userGithub}/>
				<UserReposInfo repos={this.state.userInfoRepos} />
			</div> 
		) 
	} 
}