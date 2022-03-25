import React, { useState } from "react";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";

class ProfilePicChanger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }
  render() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
      setIsModalVisible(true);
    };
    const handleOk = () => {
      setIsModalVisible(false);
    };
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    return (
      <div className="ProfilePicChanger">
        <>
          <Button type="primary" onClick={showModal}>
            Open Modal
          </Button>
          <Modal
            title="Change Profile Picture"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </>
      </div>
    );
  }
}

export default ProfilePicChanger;
