import Password from "./FormFields/passwordField";
import styles from "./../styles/Form.module.css";
import Button from "./FormFields/button";
import TextField from "./FormFields/textField";
import EmailField from "./FormFields/emailField";
import Image from "next/image";
import { useState } from "react";
export default function SignupComponent() {
  const imgSrc = require("./../public/contact.png");
  const [profileImg, setProfileImg] = useState(imgSrc);
  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const camera = require("./../public/camera.svg");
  function clickCameraAction() {
    document.getElementById("file").click();
  }
  function fileInput(e) {
    const [selectedFile] = e.target.files;
    const img = URL.createObjectURL(selectedFile);
    setProfileImg(img);
  }

  const handleChange = (e) => {
    setUserDetail({
      ...userDetail,

      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const validate = onValidation();
    if (validate) {
      console.log(userDetail);
    } else {
      return;
    }
  };
  function onValidation() {
    if (userDetail.name == "") {
      alert("name cannot be empty");
      return false;
    }
    if (userDetail.email == "") {
      alert("email cannot be empty");
      return false;
    }
    if (userDetail.password != "") {
      if (
        userDetail.confirmPassword != "" &&
        userDetail.confirmPassword !== userDetail.password
      ) {
        alert("confirm password should be same as password ");
        return false;
      }
    } else {
      alert("password field cannot be empty");
      return false;
    }
    return true;
  }
  return (
    <div>
      <div className={styles.formContainer}>
        <div className={styles.formTitle}>
          <p className={styles.title}>Signup</p>
        </div>
        <div className={styles.imgContainer}>
          <div>
            <Image
              src={profileImg}
              width={100}
              height={100}
              className={styles.profileImg}
            ></Image>
            <input
              type="file"
              id="file"
              onChange={fileInput}
              hidden
              accept="image*/"
            ></input>
          </div>
          <div className={styles.cameraImg} onClick={clickCameraAction}>
            <Image src={camera}></Image>
          </div>
        </div>
        <div>
          <TextField
            placeholder={"Enter your name"}
            name={"name"}
            onChange={handleChange}
            required={true}
          ></TextField>
        </div>
        <div>
          <EmailField
            name={"email"}
            placeholder={"Enter your email"}
            showIcon={false}
            onChange={handleChange}
            required={true}
          ></EmailField>
        </div>
        <div>
          <Password
            name={"password"}
            placeholder={"Enter password"}
            onChange={handleChange}
            required={true}
          ></Password>
        </div>
        <div>
          <Password
            name={"confirmPassword"}
            placeholder={"Enter confirm password"}
            onChange={handleChange}
            required={true}
          ></Password>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div>
          <Button buttonName="Sign Up" handleClick={handleSubmit}></Button>
        </div>
      </div>
    </div>
  );
}
