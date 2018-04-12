import React, { Component } from 'react';

export default class UserReposInfo extends React.Component {

	constructor(props) {
	    super(props);
 	}

	render() {  
		return ( 
			<div className="body"> 
				{this.props.repos.length}
			</div> 
		) 
	} 
}