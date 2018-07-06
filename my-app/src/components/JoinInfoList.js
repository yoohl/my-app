import React, { Component } from 'react';
import JoinInfo from './JoinInfo';

class JoinInfoList extends Component {
	static defaultProps = {
		data: []
	}
	render() {
		const { data, onRemove, onUpdate } = this.props;
		const list = data.map(
			info => (
				<JoinInfo 
					onRemove={onRemove} 
					onUpdate={onUpdate}
					info={info} 
					key={info.id} 
				/>
			) 
		)
		return (
			<div>
				{list}
			</div>
		);
	}
}

export default JoinInfoList;