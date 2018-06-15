import React, { Component } from 'react';
import Form from '../components/Form';

class Join extends Component {

  handleCreate = (data) => {
    console.log(data);
  }
  render() {
    return (
    	<div>
    		<Form onCreate={this.handleCreate} />
    	</div>
      
    );
  }
}

export default Join;