import React, { Component } from 'react';
/* src/components/Header.js */
import styled from 'styled-components';

const h1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
class Movie extends Component {

	// static propTypes = {
	// 	title: React.propTypes.string,
	// 	poster: React.this.propTypes.string
	// }

  render() {
  	console.log(this)
    return (
    	<div>
    		<MoviePoster poster={this.props.poster}/>
    		<h1>{this.props.title}</h1>	
    	</div>
      
    );
  }
}

class MoviePoster extends Component {
	render() {
		console.log(this)
		return (
			<img src={this.props.poster} width="320" />
		);
	}
}

export default Movie;