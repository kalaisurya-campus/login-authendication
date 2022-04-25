import axios from "axios";

export function getValueDataSet() {
    return new Promise((resolve, reject) => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                resolve("Success", res.data);
            })
            .catch((err) => {
                reject("err", err);
                console.log("errs", err);
            });
    });
}
