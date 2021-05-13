import React, { FC } from "react";
import ReactModal from "react-modal";
import ModalProps from "../types/ModalProps";

const Logout: FC<ModalProps> = ({ isOpen, onClickToggle }) => {

    const onClickLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        onClickToggle(e);
    };

    const onClickCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
                <div className="logout-inputs">
                    Are you sure you want to logout?
                </div>
                <div className="button-group">
                    <div className="form-btn-left m-2">
                        <button
                            className="btn btn-success"
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
                </div>
            </form>
        </ReactModal>
    )
}

export default Logout;