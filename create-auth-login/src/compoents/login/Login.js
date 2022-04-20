import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login(props) {
    const [emails, SetEmail] = useState("");
    const [passwords, SetPassword] = useState("");
    const history = useHistory();
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm();
    const emailvalue = (e) => {
        SetEmail(e.target.value);
    };
    const passwordvalue = (e) => {
        SetPassword(e.target.value);
    };
    useEffect(() => {
        if (localStorage.getItem("tokenauth")) {
            history.push("/");
        }
    }, []);
    const onSubmit = () => {
        console.log(emails, passwords);
        // if (emails === "kalai@gmail.com" && passwords === "123") {
        //     history.push("/");
        // }
        if (emails !== "kalai@gmail.com" || passwords !== "1234") {
            return toast("Invalid Email and Password!");
        }
        localStorage.setItem("tokenauth", true);
        history.push("/");
        SetEmail("");
        SetPassword("");
    };
    return (
        <div className="container">
            <h1>Login Page</h1>
            <ToastContainer />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                        Email address
                    </label>
                    <input
                        {...register("emails", {
                            required: true,
                        })}
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="emails"
                        value={emails}
                        onChange={emailvalue}
                    />
                    <div>
                        {errors.emails && (
                            <span style={{ color: "red" }}>
                                This field is required Email
                            </span>
                        )}
                    </div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                        Password
                    </label>
                    <input
                        {...register("passwords", { required: true })}
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        value={passwords}
                        name="passwords"
                        onChange={passwordvalue}
                    />
                    <div>
                        {errors.passwords && (
                            <span style={{ color: "red" }}>
                                This field is required password
                            </span>
                        )}
                    </div>
                </div>

                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Login;
