import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { Spin } from "antd";

export default function ProductList() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [del, setDel] = useState(false);
  const [email, setEmail] = useState("");
  const [id, setID] = useState("");

  useEffect(async () => {
    //getting product data through api
    let result = await fetch("https://slimy-mouse-25.loca.lt/getAll", {
      headers: {
        authorization: localStorage.getItem("itemName"),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    setData(result);
    setLoading(false);
  }, [del]);

  const deleteUser = (_id) => {
    setLoading(true);
    fetch(`https://slimy-mouse-25.loca.lt/delete/${_id}`, {
      method: "DELETE",
    })
      .then((res) => {
        setDel(!del);
      })
      .catch((error) => {});
  };

  const updateUser = (_id, email) => {
    setEmail(email);
    setID(_id);
  };

  function update(id) {
    setLoading(true);
    fetch(`https://slimy-mouse-25.loca.lt/update/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((update) => {
        setDel(!del);
      })

      .catch((error) => {
        console.log("error", error);
      });
    setEmail("");
  }

  return (
    <>
      {loading ? (
        <div className="spinner">
          <Spin />
        </div>
      ) : (
        <div>
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
                        title="update"
                        className="btn btn-success "
                      >
                        Edit
                      </Button>
                    </td>
                    <td>
                      <Button
                        onClick={() => deleteUser(item._id)}
                        title="delete"
                        className="btn btn-danger"
                      >
                        delete
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
          <Button
            onClick={() => update(id)}
            value={email}
            className="btn btn-success "
          >
            Edit
          </Button>
        </div>
      )}
    </>
  );
}
