import React, { Component } from 'react';

export default class IssuesComponent extends React.Component {

	constructor(props) {
	    super(props);
 	}

	render() {  
		console.log(this.props.issues)
		return ( 
			<ul> 
				{this.props.issues.length > 0 && this.props.issues[0]
					? this.props.issues.map((issue) => {
						console.log(issue);
						return (
							<li key={issue.id}>{issue.title}</li>
						);
					})
					: ''
				}
			</ul> 
		) 
	} 
}