"use client";

import {useState} from "react";

import ProfileIcon from "@/components/icons/ProfileIcon.jsx";
import style from "./SignUp.module.scss";
import Modal from "@/components/ui/modal/Modal";
import Auth from "@/features/auth/Auth";

const SignUp = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className={style.wrapper}>
            <button className={style.btn} onClick={() => setOpen(true)}>
                <ProfileIcon className={style.icon} />
                Sign up
            </button>
            <Modal isOpen={open} onClose={() => setOpen(false)}>
                <Auth />
            </Modal>
        </div>
    );
};

export default SignUp;
