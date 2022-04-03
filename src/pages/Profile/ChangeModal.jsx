import React, { useState } from "react";
import "./profilePage.css";
import { Modal } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useMutation } from "../../hooks/useApi";

const ChangeEmailForm = () => {
  const patchUser = useMutation("/users/current", { method: "put" });

  const EMAIL_SUCCESS = "Submission Sucessful";
  const EMAIL_NOT_MATCH = "Email mismatch! Please try again.";

  const [changeEmail, setChangeEmail] = useState({
    oldEmail: "",
    newEmail: "",
    confirmEmail: "",
  });

  const [changeEmailMsg, setchangeEmailMsg] = useState("");

  const handleChangeEmail = (event) => {
    setChangeEmail({ ...changeEmail, [event.target.name]: event.target.value });
  };

  const handleSubmitChangeEmail = async (event) => {
    event.preventDefault();
    if (changeEmail.confirmEmail !== changeEmail.newEmail)
      setchangeEmailMsg(EMAIL_NOT_MATCH);
    else {
      await patchUser({
        data: {
          email: changeEmail.newEmail,
        },
      });
      setchangeEmailMsg(EMAIL_SUCCESS);
    }
  };

  return (
    <div className="flex flex-col gap-2 px-1 mx-8">
      <div className="flex flex-row justify-center pb-2 text-lg font-bold text-primary-blue">
        Change Login Email
      </div>
      <input
        className="block w-full h-8 px-4 py-3 mb-6 leading-tight text-gray-700 bg-white border shadow-sm rounded-xl"
        placeholder="Old Email"
        name="oldEmail"
        onChange={handleChangeEmail}
      />
      <input
        className="block w-full h-8 px-4 py-3 mb-2 leading-tight text-gray-700 bg-white border shadow-sm rounded-xl"
        placeholder="New Email"
        name="newEmail"
        onChange={handleChangeEmail}
      />
      <input
        className="block w-full h-8 px-4 py-3 mb-2 leading-tight text-gray-700 bg-white border shadow-sm rounded-xl"
        placeholder="Confirm New Email"
        name="confirmEmail"
        onChange={handleChangeEmail}
      />
      <button
        className="h-8 mt-2 font-bold text-white shadow-lg rounded-xl bg-primary-blue"
        onClick={handleSubmitChangeEmail}
      >
        Submit!
      </button>
      <div
        className={
          "flex flex-row justify-center text-xs  " +
          (changeEmailMsg === EMAIL_NOT_MATCH
            ? "text-red-500"
            : "text-gray-500")
        }
      >
        {changeEmailMsg}
      </div>
    </div>
  );
};

const ChangePasswordForm = () => {
  const patchUser = useMutation("/users/current", { method: "put" });

  const PASSWORD_SUCCESS = "Submission Sucessful";
  const PASSWORD_NOT_MATCH = "Password mismatch! Please try again.";
  const PASSWORD_PATTERN_NOT_MATCH =
    "New password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters.";

  const [changePassword, setChangePassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [changePasswordMsg, setchangePasswordMsg] = useState("");

  const handleChangePassword = (event) => {
    setChangePassword({
      ...changePassword,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitChangePassword = async (event) => {
    event.preventDefault();
    const pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if (changePassword.confirmPassword !== changePassword.newPassword)
      setchangePasswordMsg(PASSWORD_NOT_MATCH);
    else if (!pattern.test(changePassword.newPassword)) {
      setchangePasswordMsg(PASSWORD_PATTERN_NOT_MATCH);
    } else {
      await patchUser({
        data: {
          plaintextPassword: changePassword.newPassword,
        },
      });
      setchangePasswordMsg(PASSWORD_SUCCESS);
    }
  };

  const [showOldPass, setShowOldPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  return (
    <div className="flex flex-col gap-2 px-1 mx-8">
      <div className="flex flex-row justify-center pb-2 text-lg font-bold text-primary-blue">
        Change Password
      </div>
      <div>
        <div className="relative flex flex-row justify-end ">
          <button
            className="absolute mt-1 mr-2"
            onClick={() => setShowOldPass(!showOldPass)}
          >
            {showOldPass ? (
              <VisibilityIcon className="scale-75 text-primary-blue" />
            ) : (
              <VisibilityOffIcon className="scale-75 text-primary-blue" />
            )}
          </button>
        </div>
        <input
          className="block w-full h-8 px-4 py-3 mb-6 leading-tight text-gray-700 bg-white border shadow-sm rounded-xl"
          type={showOldPass ? "" : "password"}
          placeholder="Old Password"
          name="oldPassword"
          onChange={handleChangePassword}
        />
      </div>
      <div>
        <div className="relative flex flex-row justify-end ">
          <button
            className="absolute mt-1 mr-2"
            onClick={() => setShowNewPass(!showNewPass)}
          >
            {showNewPass ? (
              <VisibilityIcon className="scale-75 text-primary-blue" />
            ) : (
              <VisibilityOffIcon className="scale-75 text-primary-blue" />
            )}
          </button>
        </div>
        <input
          className="block w-full h-8 px-4 py-3 mb-2 leading-tight text-gray-700 bg-white border shadow-sm rounded-xl"
          type={showNewPass ? "" : "password"}
          placeholder="New Password"
          name="newPassword"
          onChange={handleChangePassword}
        />
      </div>
      <div>
        <div className="relative flex flex-row justify-end ">
          <button
            className="absolute mt-1 mr-2"
            onClick={() => setShowConfirmPass(!showConfirmPass)}
          >
            {showConfirmPass ? (
              <VisibilityIcon className="scale-75 text-primary-blue" />
            ) : (
              <VisibilityOffIcon className="scale-75 text-primary-blue" />
            )}
          </button>
        </div>
        <input
          className="block w-full h-8 px-4 py-3 mb-2 leading-tight text-gray-700 bg-white border shadow-sm rounded-xl"
          type={showConfirmPass ? "" : "password"}
          placeholder="Confirm New Password"
          name="confirmPassword"
          onChange={handleChangePassword}
        />
      </div>
      <button
        className="h-8 mt-2 font-bold text-white shadow-lg rounded-xl bg-primary-blue"
        type="submit"
        onClick={handleSubmitChangePassword}
      >
        Submit!
      </button>
      <div
        className={
          "flex flex-row justify-center text-xs  " +
          (changePasswordMsg === PASSWORD_NOT_MATCH ||
          changePasswordMsg === PASSWORD_PATTERN_NOT_MATCH
            ? "text-red-500"
            : "text-gray-500")
        }
      >
        {changePasswordMsg}
      </div>
    </div>
  );
};

export default function ChangeModal({ open, handleClose }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <div className="absolute w-3/4 h-full max-w-3xl p-4 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:h-auto md:w-full">
        <div className="relative bg-gray-100 shadow rounded-3xl">
          <div className="grid pt-5 sm:border-r-1 md:grid-cols-2">
            <div className="justify-center py-5 border-gray-300 border-dashed md:border-r-2">
              <ChangeEmailForm />
            </div>
            <div className="py-5">
              <ChangePasswordForm />
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <button
              className="w-full h-8 mx-8 mt-2 mb-10 font-bold text-gray-500 bg-white shadow-lg rounded-xl md:w-2/5"
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
