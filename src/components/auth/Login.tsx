import React, { FC, useReducer, useEffect } from "react";
import ReactModal from "react-modal";
import ModalProps from "../types/ModalProps";
import { userReducer } from "./common/userReducer";
import { allowSubmit } from "./common/helpers";
import { useDispatch } from "react-redux";
import { UserProfileSetType } from "../../store/user/reducer";

const Login: FC<ModalProps> = ({ isOpen, onClickToggle }) => {
  const [{ userName, password, resultMsg, isSubmitDisabled }, dispatch] =
    useReducer(userReducer, {
      userName: "",
      password: "",
      resultMsg: "",
      isSubmitDisabled: true,
    });
  const reduxDispatch = useDispatch();

  useEffect(() => {
    // todo: replace with GraphQL call
    reduxDispatch({
      type: UserProfileSetType,
      payload: {
        id: 1,
        userName: "testUser",
      },
    });
  }, [reduxDispatch]);

  const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "userName", payload: e.target.value });
    if (!e.target.value)
      allowSubmit(dispatch, "Username cannot be empty", true);
    else allowSubmit(dispatch, "", false);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "password", payload: e.target.value });
    if (!e.target.value)
      allowSubmit(dispatch, "Password cannot be empty", true);
    else allowSubmit(dispatch, "", false);
  };

  const onClickLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    onClickToggle(e);
  };

  const onClickCancel = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onClickToggle(e);
  };

  return (
    <ReactModal
      className="modal-menu"
      isOpen={isOpen}
      onRequestClose={onClickToggle}
      shouldCloseOnOverlayClick={true}
    >
      <form>
        <div className="reg-inputs">
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              className="form-control"
              type="text"
              value={userName}
              onChange={onChangeUserName}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              value={password}
              onChange={onChangePassword}
            />
          </div>
        </div>
        <div className="button-group">
          <div className="form-btn-left m-2">
            <button
              className="btn btn-success"
              disabled={isSubmitDisabled}
              onClick={onClickLogin}
            >
              Login
            </button>
            <button
              className="btn btn-danger m-2"
              onClick={onClickCancel}
            >
              Close
            </button>
          </div>

          <span className="form-btn-left">
            <strong>{resultMsg}</strong>
          </span>
        </div>
      </form>
    </ReactModal>
  );
};

export default Login;
