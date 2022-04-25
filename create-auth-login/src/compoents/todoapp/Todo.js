import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./styles/Todo.scss";
const getdatlocal = () => {
    let data = localStorage.getItem("books");
    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
};
function Todo({ color }) {
    const [store, SetStore] = useState(getdatlocal());
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [age, SetAge] = useState("");
    const [place, SetPlace] = useState("");
    const usehistory = useHistory();
    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(store));
    }, [store]);
    const handlesubmits = (e) => {
        e.preventDefault();
        console.log(email, place, name, age);
        let book = {
            name,
            email,
            age,
            place,
        };
        SetStore([...store, book]);
        SetName("");
        SetEmail("");
        SetAge("");
        SetPlace("");
        setTimeout(() => {
            usehistory.push("/login");
        }, 3000);
    };

    const deletelocal = (id) => {
        console.log(id);
        let filtersddata = store.filter((elemt, index) => {
            return index + 1 !== id;
        });
        SetStore(filtersddata);
    };
    return (
        <div>
            <h1
                className="text-center"
                style={{ color: color, fontWeight: 600 }}
            >
                ToDo List
            </h1>
            <div className="todo-top mt-5">
                <form onSubmit={handlesubmits}>
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="exampleInputName"
                            aria-describedby="nameHelp"
                            onChange={(e) => SetName(e.target.value)}
                            value={name}
                        />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputAge" class="form-label">
                            Age
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="exampleInputAge"
                            aria-describedby="ageHelp"
                            onChange={(e) => SetAge(e.target.value)}
                            value={age}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={(e) => SetEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPlace" class="form-label">
                            Place
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="exampleInputPlace"
                            onChange={(e) => SetPlace(e.target.value)}
                            value={place}
                        />
                    </div>

                    <button type="submit" class="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
            <div>
                {/* data table inside */}
                <div class="table-responsive">
                    <table class="table align-middle">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Place</th>
                            </tr>
                        </thead>
                        <tbody>
                            {store.map((items, index) => (
                                <tr key={index}>
                                    <td style={{ color: color }}>
                                        {items.name}
                                    </td>
                                    <td>{items.email}</td>
                                    <td>{items.age}</td>
                                    <td>{items.place}</td>
                                    <td>
                                        <button
                                            className="to-btn"
                                            onClick={() =>
                                                deletelocal(index + 1)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {store.length === 0 && <div>No Data Found Important!!!</div>}
            </div>
        </div>
    );
}

export default Todo;
