import React, {useState} from 'react';
import styles from './Login.module.css';

export const Login = () => {
	const [isEmail, setIsEmail] = useState('');
	const [isPassword, setIsPassword] = useState('');
	const [isRemember, setIsRemember] = useState(false);

	return (
		<div className={styles.loginForm}>
			<div className={styles.imgLogin}>
				<img src="../assets/image/img-login.jpg" />
			</div>
			<div className={styles.formLogin}>
				<h1>Login to continue</h1>
				<div className={styles.formInput}>
					<h2
						className={styles.labelInput}
						style={{top: isEmail || isEmail.length > 0 ? 0 : '50%'}}
					>
						Email
					</h2>
					<input value={isEmail} onChange={(e) => setIsEmail(e.target.value)} />
				</div>

				<div className={styles.formInput}>
					<h2
						className={styles.labelInput}
						style={{top: isPassword || isPassword.length > 0 ? 0 : '50%'}}
					>
						Password
					</h2>
					<input value={isPassword} onChange={(e) => setIsPassword(e.target.value)} />
				</div>

				<div className={styles.btn}>
					<button className={styles.loginButton}>Login</button>
				</div>
			</div>
		</div>
	);
};
