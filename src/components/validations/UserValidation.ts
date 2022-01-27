import { InitialValues } from './../utils/interfaces';
import { Errors } from '../utils/interfaces';

export default function validateInfo(formData: InitialValues) {
	let errors = <Errors>{};

	if (!formData.name.trim()) {
		errors.name = 'Username required';
	}
	if (!formData.email) {
		errors.email = 'Email required';
	} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
		errors.email = 'Email address is invalid';
	}

	if (!formData.password) {
		errors.password = 'Password is required';
	} else if (formData.password.length < 6) {
		errors.password = 'Password needs to be 6 characters or more';
	}

	return errors;
}
