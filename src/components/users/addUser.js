import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { Divider, Result, Form, Button, Row, Col } from 'antd';
import Loading from '../loading/loading';

import styles from './citizen.module.css';
import globalstyle from '../../style.module.css';
import Requirements from '../requirements/requirements';

import { config } from '../../config/config';

const loginItems = [
    {
        type: "text",
        name: "first_name",
        label: "First Name",
        required: true,
        value: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i",
        message: "Invalid First Name"
    
      },  
       {
        type: "text",
        name: "last_name",
        label: "Last Name",
        required: true,
        value: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i",
        message: "Invalid lastname"
    
      },  
       {
        type: "text",
        name: "email",
        label: "Email",
        required: true,
        value: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i",
        message: "Invalid email address"
    
      },
   {
     type: "text",
     name: "username",
     label: "Username",
     required: true,
     value: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i",
     message: "Invalid Username"
 
   },
   {
     type: "text",
     name: "password",
     label: "Password",
     required: true,
     value: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i",
     message: "Invalid Password"
 
   },
   {
     type: "text",
     name: "country",
     label: "Country",
     required: true,
     value: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i",
     message: "Invalid Country"

   }
]

const url = config.BASE_URL;


const AddUser = (props) => {


const [loading, setLoading] = useState(false)
const [sucessMessage, setSucessMessage] = useState(false)
const [showForm, setShowForm] = useState(true)


const {  register, handleSubmit, errors } = useForm();


const onSubmit = data => {
   // console.log("jibrel jibrel data",data);
    axios.post(`${url}/users`, data)
     .then(response => {
        setSucessMessage(true);
        setLoading(false);
    })
     .catch(error => {
        setLoading(false);
       throw(error);
     });
}

 
return (


<div className={globalstyle.container}>      
<div className={styles.citizensInnerContainer}>      
<Row gutter={[24]}>
<Col md={12} xs={24}></Col>

<Col md={12} xs={24}>
<div className={styles.loginForm}>
{loading ? <Loading /> : null }
{showForm ?
<>
<Divider>Add user</Divider>



<form  onSubmit={handleSubmit(onSubmit)}>
{ loginItems.map((item, i) =>(
 <div key={i}>
<div className={styles.formLabel}>{item.label}</div>
    <Form.Item>
    {errors.name && errors.message}
<input
        type={item.type}
        name={item.name}
        style={{fontSize:"16px"}}
        className={styles.formText}
        ref={register({
          required: item.required,
          pattern: {
            value: item.value,
            message: item.message
          }
        })}
      />
    </Form.Item>
</div>
))
}

<Button variant="primary"  htmlType="submit" className={styles.formBtn} >
Submit
</Button>
</form>


</>
:
null
}

{
sucessMessage ?
    <Result
    status="success"
    title="User details added to blockchain"
    subTitle="Please note that the process will take approximately 30secs tom update on the blockchain"
    extra={[
      <Button onClick = {()=>{
        setShowForm(true)
        setSucessMessage(false)
      }} type="primary" key="console">
        Add more users
      </Button>,
    //  <Link to={`/citizens`}><Button key="buy">View citizens</Button></Link> ,
    ]}
  />
:
null
}
</div>
</Col>
</Row>
</div>
</div>
 
);
};

export default AddUser;