import React, { Component } from 'react';

export default class UserInfo extends React.Component {

	constructor(props) {
	    super(props);
 	}

	render() { 
		return ( 
			<div className="body"> 
				{this.props.user}
			</div> 
		) 
	} 
}