import React, { Component } from 'react';

export default class UserReposInfo extends React.Component {

	constructor(props) {
	    super(props);
 	}

 	createLink(link){
 		return <a href={link}>Link to Github</a>
 	}

	render() {  
		return ( 
			<div className="repoContainer"> 
				{this.props.repos.length > 0 
					? this.props.repos.map((repo) => {
						return (<div className="repoElement" key={repo.id.toString()}>{repo.name} - {this.createLink(repo.html_url)}</div>);
					})
					: 'No hay repositorios'
				}
			</div> 
		) 
	} 
}