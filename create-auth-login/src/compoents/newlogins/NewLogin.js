import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import * as Scroll from "react-scroll";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import "./styles/LoginNew.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getValueDataSet } from "./api/Get";
import { CirclePicker } from "react-color";
import Tippy from "@tippyjs/react";
function NewLogin({ color }) {
    const { loginWithRedirect } = useAuth0();
    const [colors, SetColors] = useState([]);

    // const news = () => {
    //     let p = new Promise((resolve, reject) => {
    //         let a = 1 + 11;
    //         if (a === 2) {
    //             resolve("Success");
    //         } else {
    //             reject("Faild");
    //         }
    //     });
    //     p.then((res) => {
    //         console.log(res);
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // };
    // news();

    const orange = () => {
        var elms = document.querySelectorAll("color");
        // document.getElementById("color").style.color = "orange";
        elms.style.color = "orange";
    };
    const green = () => {
        document.getElementById("color").style.color = "green";
    };
    const blue = () => {
        document.getElementById("color").style.color = "blue";
    };
    const red = () => {
        document.getElementById("color").style.color = "red";
    };
    const yellow = () => {
        document.getElementById("color").style.color = "yellow";
    };

    return (
        <div className="top-buttons">
            <h1> welcome too new login</h1>

            <ToastContainer />
            <div className="top-scrolls">welcome</div>
            {/* <div className="container">
                <div className="box">
                    <div className="front">
                        <img src="https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    </div>
                    <div className="back">
                        <div className="back-content">
                            <h1 className="h1">welcome to kalaisurya</h1>
                            <div className="des">
                                Loream set all success function in section all
                                function data
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <p id="color" style={{ color: color }}>
                color change ghfdjkghjdkfghjkdf
            </p>
            <p style={{ color: color }}>welcome to kalaisurya</p>
            <h1 style={{ color: color }}>Thank you all</h1>

            {/* <p onClick={orange} className="orange"></p>
            <p onClick={green} className="green"></p>
            <p onClick={red} className="red"></p>
            <p onClick={blue} className="blue"></p>
            <p onClick={yellow} className="yellow"></p> */}

            {/* <Tippy
                interactive={true}
                content={
                    <CirclePicker
                        color={colors}
                        onChangeComplete={(color) => SetColors(color.hex)}
                    />
                }
            >
                <button>Change color</button>
            </Tippy> */}
        </div>
    );
}

export default NewLogin;
