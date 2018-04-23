import React, { Component } from 'react';
import IssuesComponent from "./issuesComponent.jsx";

export default class UserReposInfo extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	repoIssueSelected: {}
	    }
	    this.setRepoIssueSelected = this.setRepoIssueSelected.bind(this);
 	}

 	createLink(link){
 		return <a href={link}>Link to Github</a>
 	}

 	setRepoIssueSelected(issues){
 		this.setState({repoIssueSelected: issues})
 	}

	render() {  
		return ( 
			<div className="mainContainer"> 
				<div className="repoContainer"> 
				{this.props.repos.length > 0 && this.props.repos[0]
					? this.props.repos.map((repo) => {
						return (
							<div className="repoElement" key={repo.id.toString()}>
								<div >
									<div className="repoBlockInfo">
										{repo.name} - {this.createLink(repo.html_url)}
									</div>
									{repo.hasReportedIssues && 
										<div className="issueBlock" onClick={this.setRepoIssueSelected.bind(this,repo.issuesReported)}>
											Issues
										</div>
									}
								</div>
							</div>
						);
					})
					: 'No hay repositorios'
				}
				</div>
				<div className="issueRepoElement">
					<IssuesComponent issues={this.state.repoIssueSelected}/>
				</div>
			</div> 
		) 
	} 
}