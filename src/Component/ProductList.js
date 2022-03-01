import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";

export default function ProductList() {
  const [data, setData] = useState();
  const [del, setDel] = useState(false);
  const [email, setEmail] = useState("");
  const [id, setID] = useState("");

  useEffect(async () => {
    //getting product data through api
    let result = await fetch("https://cowardly-firefox-58.loca.lt/getAll", {
      headers: {
        authorization: localStorage.getItem("itemName"),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    console.log("result-------", result);
    result = await result.json();
    console.log("result======>", result.createuser);
    setData(result.createuser);
  }, [del]);

  const deleteUser = (_id) => {
    fetch(`https://cowardly-firefox-58.loca.lt/delete/${_id}`, {
      method: "DELETE",
    })
      .then((res) => {
        setDel(!del);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const updateUser = (_id, email) => {
    setEmail(email);
    setID(_id);
  };

  function update(id) {
    fetch(`https://cowardly-firefox-58.loca.lt/update/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((update) => {
        console.log("update", update);
        setDel(!del);
      })

      .catch((error) => {
        console.log("error", error);
      });
  }

  return (
    <>
      <Header />

      <h1>Product List</h1>
      <Table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
          </tr>
        </thead>
        {data?.map((item, id) => {
          return (
            <tbody key={id}>
              <tr>
                <td>{item._id}</td>
                <td>{item.email}</td>
                <td>
                  <Button
                    onClick={() => updateUser(item._id, item.email)}
                    className="btn btn-success "
                  >
                    Update
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={() => deleteUser(item._id)}
                    className="btn btn-danger "
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        palceholder="enter update email"
      />
      <Button onClick={() => update(id)} className="btn btn-success ">
        Update
      </Button>
    </>
  );
}
