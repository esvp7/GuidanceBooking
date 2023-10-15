import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		reason: "default",
		details: "",
	    grade: "",
		isNewcomer: "default",
		isNewStudent: "default",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleReason = (e) => {
		setData({ ...data, reason: e.target.value });
	};

	const handleQ1 = (e) => {
		setData({ ...data, isNewcomer: e.target.value });
	};

	const handleQ2 = (e) => {
		setData({ ...data, isNewStudent: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5151/api/request";
			const { data: res } = await axios.post(url, data);
			navigate("/success");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

return (
    <div className="signup_container">
			<div className="signup_form_container">
				<div className="left">
					<h2 className="boldtitle">GuidanceBooking</h2>
						<p className="white_btn">
							Efficiently Book an Appointment with your Guidance Counselor. 
                            Please Fill out the Following Information:
						</p>
				</div>
				<div className="right">
				<h1 className="form-header">Create Request</h1>
					<form className="form_container" onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className="input"
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className="input"
						/>
						<input
							type="email"
							placeholder="School Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className="input"
						/>
						<select className="input" placeholder="Reason of Appointment" value={data.reason} onChange={handleReason}>
							<option value="default" disabled selected>Reason of Appointment</option>
							<option value="Newcomer Inquiry">Newcomer Inquiry</option>
							<option value="Timetable Change">Timetable Change</option>
							<option value="Professional Pathways & Scholarships">Professional Pathways & Scholarships</option>
                            <option value="General Inquiry">General Inquiry</option>
						</select>
                        <input
							type="text"
							placeholder="+ Details (optional)"
							onChange={handleChange}
							value={data.details}
							name="details"
							className="input"
						/>
						<input 
						  type="number"
						  name="grade" 
						  min="9"
						  max="12"
						  onChange={handleChange}
						  value={data.grade}
						  placeholder="Grade"
						  required
						  className="input"
						/>
						<select className="input" value={data.isNewcomer} onChange={handleQ1}>
							<option value="default" disabled selected>Are You New To Canada?</option>
							<option value={true}>Yes</option>
							<option value={false}>No</option>
						</select>
						<select className="input" value={data.isNewStudent} onChange={handleQ2}>
							<option value="default" disabled selected>Are You a New Student?</option>
							<option value={true}>Yes</option>
							<option value={false}>No</option>
						</select>
                        {error && <div className="error_msg">{error}</div>}
						<button type="submit" className="left green_btn" style={{"margin": "auto"}}>
							Send Request
						</button>
					</form>
				</div>
			</div>
		</div>

    );
};

export default Form;