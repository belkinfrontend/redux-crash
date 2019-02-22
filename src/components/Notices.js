import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getNotices } from '../actions/noticeActions';

class Notices extends Component {
	componentWillMount() {
		this.props.getNotices();
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
		if (nextProps.notice) {
			this.props.notices.push(nextProps.notice);
		}
	}

	render() {
		const noticeItem = this.props.notices.map(notice => (
			<div key={notice.id} className="noticeItem">
				<p>id: {notice.id}</p>
				<p>title: {notice.title}</p>
				<p>description: {notice.description}</p>
			</div>
		));
		return (
			<div>
				<h1>Notices</h1>
				<div>{noticeItem}</div>
			</div>
		);
	}
}

Notices.propTypes = {
	getNotices: PropTypes.func.isRequired,
	notices: PropTypes.array.isRequired,
	notice: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	notices: state.notices.items,
	notice: state.notices.item,
});

export default connect(
	mapStateToProps,
	{ getNotices }
)(Notices);
