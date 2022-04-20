import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Home(props) {
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
    return (
        <div>
            <h1 className="ms-4 mt-4">welcome to Home Page</h1>
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
