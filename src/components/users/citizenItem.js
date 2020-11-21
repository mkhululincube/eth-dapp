import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Button, Modal } from 'antd';
import ReadMoreReact from 'read-more-react';
import { UserOutlined } from '@ant-design/icons';
import style from './citizen.module.css';
import CitizenContainer from '../../containers/users/citizenContainer';
import CitizenDetailsContainer from '../../containers/users/citizenDetailsContainer';

const CitizenItem = (props) => {
const citizenItem = props.citizenItem;
 
const [showModal, setShowModal] = useState(false);
const [citizenId, SetCitizenId] = useState('');
const [citizenName, SetCitizenName] = useState('');

 const showModalButton = () => {
  setShowModal(true)
  SetCitizenId(citizenItem.returnValues.id);
  SetCitizenName(citizenItem.returnValues.name)
};

const handleOk = () => {
  setShowModal(false)
};

const handleCancel = () => {
  setShowModal(false)
};

 const ethLink = "https://ropsten.etherscan.io/tx/"+citizenItem.transactionHash;
return (
<>
<div className={style.citizenItemRow}>
<Row>
<Col md={1} xs={2}><UserOutlined /> {citizenItem.returnValues.id}</Col>
<Col md={2} xs={5}> {citizenItem.returnValues.name}</Col>
<Col md={1} xs={2}>{citizenItem.returnValues.age}</Col>
<Col md={10} xs={5}>
<ReadMoreReact text={citizenItem.returnValues.city} 
min={10}
ideal={12}
max={15}
readMoreText="view more"
/>
</Col>
<Col md={4} xs={9}>
<Button type="primary" onClick={showModalButton} block>
View Notes for {citizenItem.returnValues.name}
 </Button>
</Col>
<Col md={1} xs={1}></Col>
<Col md={3} xs={0}><a target="_blank" href={ethLink}>View txHash</a> </Col>
</Row>
<Modal
          title={`Notes for ${citizenName}`}
          visible={showModal}
          onOk={handleOk}
          onCancel={handleCancel}
        >
<CitizenDetailsContainer citizenId={citizenId} />
</Modal> 
</div>
</>
);
};

export default CitizenItem;