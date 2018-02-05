import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import renderTextField from '../components/forms/textBox';
import renderSelectField from '../components/forms/selectField';

const validate = (values) => {
	const errors = {};
	const requiredFields = [
		'legalName',
		'type',
		'email',
	];
	requiredFields.forEach((field) => {
		if (!values[field]) {
			errors[field] = 'Required';
		}
	});
	if (
		values.email &&
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
	) {
		errors.email = 'Invalid email address';
	}
	return errors;
};

const width = window.innerWidth <= 900 ? '80%' : '30%';
const customContentStyle = {
	width: 'auto',
	maxWidth: width,
};

class StoForm extends Component {

	static propTypes = {
		handleSubmit: PropTypes.func.isRequired,
	};

	render() {

		const actions = [
			<FlatButton
				label="Cancel"
				primary
				onClick={() => this.props.close()}
			/>,
			<RaisedButton
				label="Submit"
				primary
				onClick={() => this.props.onSubmit()}
			/>,
		];

		return (
			<div>
				<Dialog
					title="Company Details"
					actions={actions}
					modal
					contentStyle={customContentStyle}
					open={this.props.open}
				>
					<form onSubmit={() => this.props.submit()}>
						<div>
							<Field
								name="ticker"
								component={renderTextField}
								label="Ticker Name"
							/>
						</div>
						<br />
						<div>
							<Field
								name="supply"
								component={renderTextField}
								label="Total Supply"
							/>
						</div>
						<br />
						<div>
							<Field
								name="jurisdiction"
								component={renderSelectField}
								label="Jurisdiction"
							>
							<MenuItem value="Corporation" primaryText="Corporation" />
							<MenuItem value="Partnership" primaryText="Partnership" />
						</Field>
						</div>
					</form>
				</Dialog>
			</div>
		);
	}
}

StoForm = reduxForm({
	form: 'stoForm',
	validate,
})(StoForm);

export default StoForm;
