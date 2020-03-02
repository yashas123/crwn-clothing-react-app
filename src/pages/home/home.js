import React from "react";
import { withRouter } from "react-router-dom";

import Directory from '../../components/directory/directory';

import "./home.scss";

class Home extends React.Component {
  render(){
		return (
			<div className='homepage'>
				<Directory />
			</div>
		);
	}
}

export default withRouter(Home)