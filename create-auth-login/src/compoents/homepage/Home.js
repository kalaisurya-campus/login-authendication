import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
const getNames = () => {
    let datas = localStorage.getItem("books");
    if (datas) {
        return JSON.parse(datas);
    } else {
        return [];
    }
};
function Home({ colorsed }) {
    const [nameget, SetNameget] = useState(getNames());
    const [logouts, SetLogout] = useState(false);
    const history = useHistory();
    useEffect(() => {
        if (!localStorage.getItem("tokenauth")) {
            history.push("/login");
        }
    }, [logouts]);
    const logoutlocal = () => {
        localStorage.removeItem("tokenauth");
        SetLogout(true);
    };
    console.log("no", colorsed, nameget[0].name);
    return (
        <div>
            <h1 className="ms-4 mt-4" id="color" style={{ color: colorsed }}>
                welcome to Home Page <span>{nameget[0].name}</span>
            </h1>
            <button
                className="mt-5 ms-5"
                onClick={logoutlocal}
                style={{
                    padding: "15px",
                    border: "none",
                    outline: "none",
                    borderRadius: "20px",
                    backgroundColor: "orange",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                }}
            >
                Logout
            </button>
        </div>
    );
}

export default Home;
