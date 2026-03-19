import React, { useEffect, useState } from "react";
import { Button, Col, Input, Row, Table, Divider, Form } from "antd";
import { AlertOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import withCrud from '../hoc/withCrud';



function Register({ form ,editId,handleChange,handleSubmit,handleDelete,handleEdit,users,columns,onFinish,handleDetailChange,details }) {
 

  return (
    <>
    <Row justify="center" align="center" style={{ marginTop:"20px"}}>
      <Col span={12} style={{ marginTop:"90px"}}>
      <div className="form">
        
        <Row justify="center" align="center">
          <Col span={6}>
            <Input
              name = "name"
              placeholder="Enter Name"
              onChange={handleChange}
              value={form.name}
            />
          </Col>
        </Row>
        <Row justify="center" align="center">
          <Col span={6}>
            <Input
            name = "age"
              placeholder="Enter Age"
              onChange={handleChange}
              value={form.age}
            />
          </Col>
        </Row>
        <Row justify="center" align="center">
          <Col span={6}>
            <Input
            name = "email"
              placeholder="Enter Email"
              onChange={handleChange}
              value={form.email}
            />
          </Col>
        </Row>
        <Row justify="center" align="center">
          <Col span={6}>
            <Input
            name = "mobile"
              placeholder="Enter Mobile"
              onChange={handleChange}
              value={form.mobile}
            />
          </Col>
        </Row>
        <Row justify="center" align="center">
          <Col >
            <Button icon={<AlertOutlined />} onClick={handleSubmit}>
             { editId ? "Update" : "Submit"}
            </Button>
          </Col>
        </Row>
      </div>
     </Col>
      <Col span={12}>
      <div className="get-form">
        <Table
        
        dataSource={users}
        columns={columns}
         rowKey={(record) => record._id || record.id}
        />
        
      </div>
      </Col>
      </Row>

      <Button type="primary" icon={<DeleteOutlined />} danger>Primary</Button>
<Button type="default" danger>Default</Button>
<Button type="dashed">Dashed</Button>
<Button type="text">Text</Button>
<Button type="link">Link</Button>

<br/>
<Divider/>



<div className="form">
    <input 
    type="text"
    placeholder="Enter Name"
    name="username"
    value={details.username}
    onChange={handleDetailChange}
    /><br/><br/>
     <input 
    type="password"
    placeholder="Enter Name"
    name="password"
    value={details.password}
    onChange={handleDetailChange}
    />
  <button onClick={onFinish}>Submit</button>

</div>          


    </>
  );
}
export default withCrud(Register);