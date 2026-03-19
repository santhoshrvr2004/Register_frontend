import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../appRedux/actions";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { AlertOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";

const withCrud = (WrapperComponent) => {
  return (props) => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.users);
    console.log("user", users);

    const loading = useSelector((state) => state.user.loading);
    const [form, setForm] = useState({
      name: "",
      age: "",
      email: "",
      mobile: "",
    });
    const [editId, setEditId] = useState(null);

    const [details, setDetails] = useState({
      username:"",
      password:""
    });

    useEffect(() => {
      dispatch(getUser());
    }, [dispatch]);

    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };

    const handleDetailChange = (e)=>{
      setDetails({
        ...details,
        [e.target.name]:e.target.value
      })
    }

    const handleSubmit = () => {
      if (editId) {
        dispatch(updateUser({ id: editId, ...form }));
      } else {
        dispatch(createUser(form));
      }
      setForm({
        name: "",
        age: "",
        email: "",
        mobile: "",
      });

      setEditId(null);
    };

    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
      },
      {
        title: "Mobile",
        dataIndex: "mobile",
        key: "mobile",
      },
      {
        title: "Edit",
        render: (record) => {
          return (
            <EditOutlined
              onClick={() => handleEdit(record)}
              style={{ color: "blue", cursor: "pointer" }}
            />
          );
        },
      },
      {
        title: "Delete",
        render: (record) => {
          return (
            <DeleteOutlined
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => handleDelete(record._id || record.id)}
            />
          );
        },
      },
    ];

    const handleEdit = (record) => {
      setForm({
        name: record.name,
        age: record.age,
        email: record.email,
        mobile: record.mobile,
      });

      setEditId(record._id || record.id);
    };

    const handleDelete = (id) => {
      console.log("clicked");

      dispatch(deleteUser(id));
    };

    const onFinish = () => {
      console.log("Clicked bro");
      console.log("Username", details.username || null);
      console.log("Password",details.password || null);
      
    };

    return (
      <WrapperComponent
        {...props}
        form={form}
        details={details}
        editId={editId}
        users={users}
        handleChange={handleChange}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleSubmit={handleSubmit}
        loading={loading}
        columns={columns}
        onFinish={onFinish}
        handleDetailChange={handleDetailChange}
      />
    );
  };
};

export default withCrud;
