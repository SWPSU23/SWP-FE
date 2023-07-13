import React from 'react';
import './FormSalary.css';
import PropTypes from 'prop-types';
import salary from '../../assets/salary.png';
import {ButtonSmall} from '../../button/ButtonSmall/ButtonSmall';

export const FormSalary = ({handleToggleForm}) => {
	FormSalary.propTypes = {
		handleToggleForm: PropTypes.func.isRequired,
	};
	return (
		<div className="formSalary">
			<div className="formContainer">
				<div className="formTitle">
					<div>
						<img src={salary} />
					</div>
					<h1>Salary</h1>
				</div>
				<div className="tableForm">
					<div className="tableContainer">
						<table className="salaryTable">
							<thead>
								<tr className="column">
									<th className="rowStart">
										<div className="infoSalary">
											<div className="titleTable">
												<div>Create at:</div>
												<p>06/08/2023</p>
											</div>
										</div>
										<div className="infoSalary">
											<div className="titleTable">
												<div>Name:</div>
												<p>Chí Bảo</p>
											</div>
										</div>
									</th>
									<th className="rowStart">
										<div className="infoSalary">
											<div className="titleTable">
												<div>Employee ID:</div>
												<p>1234</p>
											</div>
										</div>
										<div className="infoSalary">
											<div className="titleTable">
												<div>Role:</div>
												<p>Cashier</p>
											</div>
										</div>
									</th>
								</tr>
								<tr className="column">
									<th className="rowStart">
										<div className="infoSalary">
											<div className="titleTable">
												<div>Base Salary:</div>
												<p>30.000đ</p>
											</div>
										</div>
										<div className="infoSalary">
											<div className="titleTable">
												<div>Sheet 1:</div>
												<p>20h</p>
											</div>
										</div>
										<div className="infoSalary">
											<div className="titleTable">
												<div>Sheet 2:</div>
												<p>20h</p>
											</div>
										</div>
										<div className="infoSalary">
											<div className="titleTable">
												<div>Sheet 3:</div>
												<p>20h</p>
											</div>
										</div>
									</th>
									<th className="rowStart">
										<div className="infoSalary">
											<div className="titleTable">
												<div>Sheet 3S:</div>
												<p>30.000đ</p>
											</div>
										</div>
										<div className="infoSalary">
											<div className="titleTable">
												<div>Sheet 3H:</div>
												<p>20h</p>
											</div>
										</div>
										<div className="infoSalary">
											<div className="titleTable">
												<div>Violate:</div>
												<p>10h</p>
											</div>
										</div>
									</th>
								</tr>
								<tr className="column">
									<th className="rowStart">
										<div className="infoSalary">
											<div className="titleTable">
												<div>Insurance:</div>
												<p>800.000đ</p>
											</div>
										</div>
									</th>
									<th className="rowStart">
										<div className="infoSalary">
											<div className="titleTable">
												<div>Tax:</div>
												<p>200.000đ</p>
											</div>
										</div>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className="columnEnd">
									<th className="rowEnd">
										<div className="infoSalaryEnd">
											<div className="titleTableEnd">
												<div>Gross pay:</div>
												<p>Net pay:</p>
											</div>
										</div>
									</th>
									<th className="rowEnd">
										<div className="infoSalaryEnd">
											<div className="titleTableEnd">
												<div>5.000.000đ</div>
												<p>4.000.000đ</p>
											</div>
										</div>
									</th>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="buttonCancelWrap">
					<div
						className="buttonCancel"
						onClick={() => {
							handleToggleForm();
						}}
					>
						<ButtonSmall
							style={{
								backgroundColor: '#d9d9d9',
								color: '#474C58',
							}}
							title="Cancel"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
