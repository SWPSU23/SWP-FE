import React from 'react';
import styles from './FormSalary.module.css';
import salary from '../../assets/salary.png';
import {ButtonSmall} from '../../button/ButtonSmall/ButtonSmall';
import {useNavigate} from 'react-router';

export const FormSalary = () => {
	const navigate = useNavigate();
	return (
		<div className={styles.formSalary}>
			<div className={styles.formContainer}>
				<div className={styles.formTitleSalary}>
					<div>
						<img src={salary} />
					</div>
					<h1>Salary</h1>
				</div>
				<div className={styles.tableForm}>
					<div className={styles.tableContainer}>
						<table className={styles.salaryTable}>
							<thead>
								<tr className={styles.column}>
									<th className={styles.rowStart}>
										<div className={styles.infoSalary}>
											<div className={styles.titleTable}>
												<div>Create at:</div>
												<p>06/08/2023</p>
											</div>
										</div>
										<div className={styles.infoSalary}>
											<div className={styles.titleTable}>
												<div>Name:</div>
												<p>Chí Bảo</p>
											</div>
										</div>
									</th>
									<th className={styles.rowStart}>
										<div className={styles.infoSalary}>
											<div className={styles.titleTable}>
												<div>Employee ID:</div>
												<p>1234</p>
											</div>
										</div>
										<div className={styles.infoSalary}>
											<div className={styles.titleTable}>
												<div>Role:</div>
												<p>Cashier</p>
											</div>
										</div>
									</th>
								</tr>
								<tr className={styles.column}>
									<th className={styles.rowStart}>
										<div className={styles.infoSalary}>
											<div className={styles.titleTable}>
												<div>Base Salary:</div>
												<p>30.000đ</p>
											</div>
										</div>
										<div className={styles.infoSalary}>
											<div className={styles.titleTable}>
												<div>Sheet 1:</div>
												<p>20h</p>
											</div>
										</div>
										<div className={styles.infoSalary}>
											<div className={styles.titleTable}>
												<div>Sheet 2:</div>
												<p>20h</p>
											</div>
										</div>
										<div className={styles.infoSalary}>
											<div className={styles.titleTable}>
												<div>Sheet 3:</div>
												<p>20h</p>
											</div>
										</div>
									</th>
									<th className={styles.rowStart}>
										<div className={styles.infoSalary}>
											<div className={styles.titleTable}>
												<div>Sheet 3S:</div>
												<p>30.000đ</p>
											</div>
										</div>
										<div className={styles.infoSalary}>
											<div className={styles.titleTable}>
												<div>Sheet 3H:</div>
												<p>20h</p>
											</div>
										</div>
										<div className={styles.infoSalary}>
											<div className={styles.titleTable}>
												<div>Violate:</div>
												<p>10h</p>
											</div>
										</div>
									</th>
								</tr>
								<tr className={styles.column}>
									<th className={styles.rowStart}>
										<div className={styles.infoSalary}>
											<div className={styles.titleTable}>
												<div>Insurance:</div>
												<p>800.000đ</p>
											</div>
										</div>
									</th>
									<th className={styles.rowStart}>
										<div className={styles.infoSalary}>
											<div className={styles.titleTable}>
												<div>Tax:</div>
												<p>200.000đ</p>
											</div>
										</div>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className={styles.columnEnd}>
									<th className={styles.rowEnd}>
										<div className={styles.infoSalaryEnd}>
											<div className={styles.titleTableEnd}>
												<div>Gross pay:</div>
												<p>Net pay:</p>
											</div>
										</div>
									</th>
									<th className={styles.rowEnd}>
										<div className={styles.infoSalaryEnd}>
											<div className={styles.titleTableEnd}>
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
				<div className={styles.buttonCancelWrap}>
					<div className={styles.buttonCancel} onClick={() => navigate('/')}>
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
