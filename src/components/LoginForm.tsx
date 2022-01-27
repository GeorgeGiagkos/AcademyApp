import { useState } from 'react';
import { InitialValues } from './utils/interfaces';
import { Errors } from './utils/interfaces';
import { useDispatch } from 'react-redux';
import { usersAdded } from '../store/users';
import validate from './validations/UserValidation';
import { AppDispatch } from './configureStore';

export const initialState = {
	name: '',
	email: '',
	password: '',
	address: '',
	course: 'angular',
	gender: 'male',
	city: '',
	zip: '',
};

const LoginForm = () => {
	const dispatch = useDispatch<AppDispatch>();

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		address: '',
		course: 'angular',
		gender: 'Male',
		city: '',
		zip: '',
	});
	const [errors, setErrors] = useState<Errors>({});
	const [isSubmit, setIsSubmit] = useState(false);

	const courses = ['angular', 'react', 'vue'];
	const genders = ['Male', 'Female'];

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const cleanInputs = () => {
		setFormData(initialState);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const errors = validate(formData);
		if (Object.keys(errors).length === 0) {
			dispatch(usersAdded(formData));
			cleanInputs();
		} else {
			setErrors(errors);
		}

		setErrors(errors);
		setIsSubmit(true);
	};
	return (
		<div
			className="container col-md-5"
			style={{ border: '1px solid rgb(115, 106, 94)' }}
		>
			{Object.keys(errors).length === 0 && isSubmit ? (
				<div className="ui message success">
					<h2 style={{ color: 'blue' }}>Signed is successfully</h2>
				</div>
			) : (
				<pre>{''} </pre>
			)}

			<h1>Register Form</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group ">
					<label>Name</label>
					<input
						type="text"
						name="name"
						className="form-control"
						value={formData.name}
						onChange={handleChange}
					/>
					{errors.name && <p>{errors.name}</p>}
				</div>
				<div className="form-row">
					<div className="form-group col-md-6">
						<label>Email</label>
						<input
							type="text"
							name="email"
							className="form-control"
							value={formData.email}
							onChange={handleChange}
						/>
						{errors.email && <p>{errors.email}</p>}
					</div>
					<div className="form-group col-md-6">
						<label>Password</label>
						<input
							type="password"
							name="password"
							className="form-control"
							value={formData.password}
							onChange={handleChange}
						/>
						{errors.password && <p>{errors.password}</p>}
					</div>
				</div>
				<div className="form-group ">
					<label>Address</label>
					<input
						type="text"
						name="address"
						className="form-control"
						placeholder="1234 Main St"
						value={formData.address}
						onChange={handleChange}
					/>
				</div>
				<div className="form-row">
					<div className="form-group col-md-4 ">
						<label>City</label>
						<input
							type="text"
							name="city"
							className="form-control"
							value={formData.city}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group col-md-4">
						<label>Courses</label>
						<select
							name="course"
							id="courses"
							className="form-control"
							onChange={handleChange}
						>
							<option value={courses[0]}>{courses[0]}</option>
							<option value={courses[1]}>{courses[1]}</option>
							<option value={courses[2]}>{courses[2]}</option>
						</select>
					</div>
					<div className="form-group col-md-4">
						<label>Genders</label>
						<select
							name="gender"
							id="genders"
							className="form-control"
							onChange={handleChange}
						>
							<option value={genders[0]}>{genders[0]}</option>
							<option value={genders[1]}>{genders[1]}</option>
						</select>
					</div>
				</div>
				<div className="form-group col-md-2" style={{ marginTop: 20 }}>
					<button type="submit" className="btn btn-primary">
						Sign Up
					</button>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
