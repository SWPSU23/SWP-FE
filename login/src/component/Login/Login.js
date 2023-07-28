import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import { actGetUserInfo, actLogin } from "../../server";

export const Login = () => {
  const [isPhone, setIsPhone] = useState("");
  const [isPassword, setIsPassword] = useState("");
  // const [isRemember, setIsRemember] = useState(false);
  const route = {
    manager: "http://localhost:3001/",
    cashier: "http://localhost:3002/",
  };

  const handleSubmit = () => {
    console.log("isPhone: " + isPhone);
    console.log("isPassword: " + isPassword);

    actLogin(isPhone, isPassword).then((response) => {
      if (response.status === 200) {
        actGetUserInfo()
          .then((response) => {
            console.log("response:actGetUserInfo " + response);
            handleGetRole(response);
          })
          .catch((err) => {
            console.log("error:actGetUserInfo " + err);
          });
      }
    });
  };

  const handleGetRole = (response) => {
    // const userInfo = JSON.parse(localStorage.getItem("user"));
    // console.log("userInfo: " + userInfo);
    // if (userInfo) {
    //   console.log("role: " + userInfo.employee_detail.role);
    //   window.location.href = eval(`route.${userInfo.employee_detail.role}`);
    // }
    console.log(" response.data.user.role: " + response.data.user.role);

    window.location.href = eval(`route.${response.data.user.role}`);
  };

  useEffect(() => {
    // const userInfo = JSON.parse(localStorage.getItem("user"));
    // console.log("userInfo: " + userInfo);
    // if (userInfo) {
    //   console.log("role: " + userInfo.employee_detail.role);
    //   window.location.href = eval(`route.${userInfo.employee_detail.role}`);
    // }
    actGetUserInfo()
      .then((response) => {
        console.log("response: " + response);
        handleGetRole(response);
      })
      .catch((err) => {
        console.log("error: " + err);
      });
  }, []);

  return (
    <div className={styles.loginForm}>
      <div className={styles.imgLogin}>
        <img src="../img-login.jpg" />
      </div>
      <div className={styles.formLogin}>
        <h1>Login to continue</h1>
        <div className={styles.formInput}>
          <h2
            className={styles.labelInput}
            style={{ top: isPhone || isPhone.length > 0 ? 0 : "50%" }}
          >
            Phone
          </h2>
          <input value={isPhone} onChange={(e) => setIsPhone(e.target.value)} />
        </div>

        <div className={styles.formInput}>
          <h2
            className={styles.labelInput}
            style={{ top: isPassword || isPassword.length > 0 ? 0 : "50%" }}
          >
            Password
          </h2>
          <input
            value={isPassword}
            onChange={(e) => setIsPassword(e.target.value)}
          />
        </div>

        <div className={styles.btn} onClick={handleSubmit}>
          <button className={styles.loginButton}>Login</button>
        </div>
      </div>
    </div>
  );
};
